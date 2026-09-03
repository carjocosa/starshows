import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';

@Injectable()
export class MailService {
  async sendQrEmail(to: string, order: any) {
    const qrDataUrl = await QRCode.toDataURL(order.qrCode);
    const html = `<h1>Starshows — Entrada confirmada</h1><p>Evento: ${order.eventId}</p><p>QR: <strong>${order.qrCode}</strong></p><img src="${qrDataUrl}" width="200"/><p>Presenta este QR en puerta. Precio pagado: $${order.total} USD</p>`;
    if (!process.env.SMTP_HOST) {
      console.log(`[MOCK EMAIL] to ${to}: ${order.qrCode}`);
      return { mocked: true, qrDataUrl };
    }
    return { sent: true, qrDataUrl };
  }
}
