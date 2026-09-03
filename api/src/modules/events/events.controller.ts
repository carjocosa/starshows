import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly events: EventsService) {}

  @Get()
  list(@Query('status') status?: string, @Query('city') city?: string) {
    return this.events.list({ status, city });
  }

  @Get(':slug')
  get(@Param('slug') slug: string) {
    return this.events.findBySlug(slug);
  }

  @Post()
  create(@Body() dto: any) {
    return this.events.create(dto);
  }
}
