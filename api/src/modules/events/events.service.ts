import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  list(filters: { status?: string; city?: string }) {
    return this.prisma.event.findMany({
      where: {
        status: filters.status || undefined,
        venue: filters.city ? { city: filters.city } : undefined,
      },
      include: { venue: true, ticketTypes: true, artists: { include: { artist: true } } },
      orderBy: { date: 'asc' },
    });
  }

  async findBySlug(slug: string) {
    const event = await this.prisma.event.findUnique({
      where: { slug },
      include: { venue: true, ticketTypes: true, artists: { include: { artist: true } } },
    });
    if (!event) throw new NotFoundException('Evento no encontrado');
    return event;
  }

  create(dto: any) {
    return this.prisma.event.create({
      data: {
        title: dto.title,
        slug: dto.slug,
        date: new Date(dto.date),
        status: dto.status || 'A_LA_VENTA',
        coverImage: dto.coverImage,
        description: dto.description,
        venueId: dto.venueId,
        ticketTypes: { create: dto.ticketTypes || [] },
      },
      include: { ticketTypes: true },
    });
  }
}
