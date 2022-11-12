export enum PaymentMethodEnum {
  'credit' = 'CREDIT-CARD',
  'paypal' = 'PAYPAL',
}

export type RangeValues = {
  code: string;
  batch: number;
  row: string;
  value: number;
};

export type LocalStructure = {
  localMap: string;
};

export type EventResume = {
  code: string;
  value: RangeValues[];
  createdAt: string;
  title: string;
  description?: string;
  image: string;
  local: string;
  paymentForm?: PaymentMethodEnum;
  totalValue: number;
  geral?: LocalStructure[];
};

export type FindEvent = {
  code?: string;
};
