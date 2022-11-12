import { PaymentMethodEnum } from '../Events/types';

export type Purcharse = {
  paymentCode: string;
  name: string;
  age?: string;
  mail?: string;
  address?: string;
  number?: string;
  city?: string;
  state?: string;
  cardNumber: string;
  cardName: string;
  expirationDate: string;
  securityCode: string;
  cpf?: string;
  zip?: string;
  value: number;
  eventTitle?: string;
  eventLocal?: string;
  eventDate?: string;
  paymentForm?: PaymentMethodEnum;
};
