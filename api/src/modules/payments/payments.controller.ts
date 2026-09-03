import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { OrdersService } from '../orders/orders.service';

@Controller('payments')
export class PaymentsController {
  constructor(private payments: PaymentsService, private orders: OrdersService) {}

  @Post('kushki')
  async kushki(@Body() dto: { eventId: string; email: string; token: string; items: any[] }) {
    const payment = await this.payments.createKushkiPayment({ amount: dto.items.reduce((s, i) => s + i.quantity * 35, 0), email: dto.email, token: dto.token });
    if (payment.status !== 'APPROVED') return { ok: false, payment };
    const order = await this.orders.create({ eventId: dto.eventId, email: dto.email, items: dto.items });
    return { ok: true, payment, order };
  }
}
