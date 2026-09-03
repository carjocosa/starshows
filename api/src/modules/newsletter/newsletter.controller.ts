import { Controller, Post, Body } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';

@Controller('newsletter')
export class NewsletterController {
  constructor(private readonly newsletter: NewsletterService) {}
  @Post('subscribe')
  subscribe(@Body() dto: { email: string }) {
    return this.newsletter.subscribe(dto.email);
  }
}
