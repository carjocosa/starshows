import { Module } from '@nestjs/common';
import { EventsModule } from './modules/events/events.module';
import { TicketsModule } from './modules/tickets/tickets.module';
import { OrdersModule } from './modules/orders/orders.module';
import { PrismaService } from './common/prisma.service';

@Module({
  imports: [EventsModule, TicketsModule, OrdersModule],
  providers: [PrismaService],
})
export class AppModule {}
