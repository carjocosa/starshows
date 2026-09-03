import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';
import { nanoid } from 'nanoid';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(dto: { eventId: string; email: string; items: { ticketTypeId: string; quantity: number }[] }) {
    return this.prisma.$transaction(async (tx) => {
      let total = 0;
      const itemsData = [];
      for (const it of dto.items) {
        const tt = await tx.ticketType.findUnique({ where: { id: it.ticketTypeId } });
        if (!tt) throw new BadRequestException(`Ticket ${it.ticketTypeId} no existe`);
        if (tt.sold + it.quantity > tt.capacity) throw new BadRequestException(`Aforo agotado para ${tt.name}`);
        await tx.ticketType.update({ where: { id: tt.id }, data: { sold: { increment: it.quantity } } });
        total += Number(tt.price) * it.quantity;
        itemsData.push({ ticketTypeId: tt.id, quantity: it.quantity, unitPrice: tt.price });
      }
      const order = await tx.order.create({
        data: {
          eventId: dto.eventId,
          email: dto.email,
          total,
          qrCode: nanoid(12).toUpperCase(),
          status: 'PAGADO',
          items: { create: itemsData },
        },
        include: { items: true },
      });
      return order;
    });
  }

  findOne(id: string) {
    return this.prisma.order.findUnique({ where: { id }, include: { items: true, event: true } });
  }

  async validateQr(qrCode: string) {
    const order = await this.prisma.order.findUnique({ where: { qrCode } });
    if (!order) throw new BadRequestException('QR inválido');
    if (order.validatedAt) throw new BadRequestException('QR ya validado');
    return this.prisma.order.update({ where: { id: order.id }, data: { validatedAt: new Date(), status: 'VALIDADO' } });
  }
}
