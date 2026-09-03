import { Injectable, BadRequestException } from '@nestjs/common';

const coupons: Record<string, { discount: number; expiresAt?: string }> = {
  PREVENTA20: { discount: 20 },
  STAR10: { discount: 10 },
};

@Injectable()
export class CouponsService {
  validate(code: string) {
    const c = coupons[code.toUpperCase()];
    if (!c) throw new BadRequestException('Cupón inválido');
    return c;
  }
}
