import { PurcharseProps } from '../Purcharse/types';

export type Tickets = {
  code?: string;
  value: number;
  createdAt?: Date;
  batch: string;
  title: string;
  description: string;
} & PurcharseProps;
