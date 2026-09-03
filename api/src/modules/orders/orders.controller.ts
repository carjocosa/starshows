import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orders: OrdersService) {}

  @Post()
  create(@Body() dto: { eventId: string; email: string; items: { ticketTypeId: string; quantity: number }[] }) {
    return this.orders.create(dto);
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.orders.findOne(id);
  }

  @Post(':id/validate')
  validate(@Param('id') id: string) {
    return this.orders.validateQr(id);
  }
}
