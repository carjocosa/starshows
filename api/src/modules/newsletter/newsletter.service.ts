import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsletterService {
  async subscribe(email: string) {
    if (!process.env.BREVO_API_KEY) {
      console.log(`[MOCK BREVO] subscribe ${email}`);
      return { mocked: true, email };
    }
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: { 'api-key': process.env.BREVO_API_KEY!, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, listIds: [Number(process.env.BREVO_LIST_ID || 2)], updateEnabled: true }),
    });
    return res.json();
  }
}
