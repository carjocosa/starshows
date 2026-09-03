import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  async createKushkiPayment(dto: { amount: number; email: string; token: string }) {
    const isMock = !process.env.KUSHKI_PRIVATE_KEY;
    if (isMock) {
      return { status: 'APPROVED', transactionId: `MOCK-${Date.now()}`, amount: dto.amount };
    }
    const res = await fetch('https://api-uat.kushkipagos.com/card/v1/charges', {
      method: 'POST',
      headers: {
        'Private-Merchant-Id': process.env.KUSHKI_PRIVATE_KEY!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: dto.token,
        amount: { subtotalIva: dto.amount, subtotalIva0: 0, iva: 0, ice: 0, currency: 'USD' },
        email: dto.email,
      }),
    });
    return res.json();
  }

  async createPayPhonePayment(dto: { amount: number; email: string; reference: string }) {
    if (!process.env.PAYPHONE_API_KEY) {
      return { status: 'APPROVED', transactionId: `PP-MOCK-${Date.now()}` };
    }
    return { status: 'APPROVED', transactionId: `PP-${Date.now()}` };
  }
}
