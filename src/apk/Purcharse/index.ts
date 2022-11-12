import ptBR from 'dayjs/locale/pt-br';

import dayjs from '../../utils/dayjs';
import delay from '../delay';
import { PaymentMethodEnum } from '../Events/types';

import { Purcharse } from './types';

const purcharse = [
  {
    paymentCode: '148120',
    name: 'Jordana Vaz Reichel',
    age: '27',
    mail: 'jordana@teste.com',
    address: 'jordana@teste.com',
    number: '145',
    city: 'General Câmara',
    state: 'Rio Grande do Sul',
    cardNumber: '1234 5678 9012 3456',
    cardName: 'JORDANA VAZ REICHEL',
    expirationDate: '03/2022',
    securityCode: '123',
    cpf: '000.000.000-00',
    code: '1',
    eventTitle: 'Warung Beach Club | Sven Väth | Roy Rosenfeld | Tim Green',
    value: 1000,
    createdAt: dayjs('2022-11-11 12:00')
      .locale(ptBR)
      .format('DD [de] MMMM [de] YYYY [ás] HH:00[h]'),
    batch: '1',
    local: 'Arena do Grêmio',
    paymentForm: PaymentMethodEnum.credit,
    image: '',
    totalValue: 50,
    eventLocal: 'Arena do Grêmio',
    eventDate: dayjs('2022-11-11 12:00')
      .locale(ptBR)
      .format('DD/MM/YYYY [ás] HH:00[h]'),
  },
  {
    paymentCode: '148120',
    code: '2',
    name: 'Jordana Vaz Reichel',
    age: '27',
    mail: 'jordana@teste.com',
    address: 'jordana@teste.com',
    number: '145',
    city: 'General Câmara',
    state: 'Rio Grande do Sul',
    cardNumber: '1234 5678 9012 3456',
    cardName: 'JORDANA VAZ REICHEL',
    expirationDate: '03/2022',
    securityCode: '123',
    cpf: '000.000.000-00',
    eventTitle: 'Warung Beach Club | Sven Väth | Roy Rosenfeld | Tim Green',
    value: 1000,
    createdAt: dayjs('2022-11-11 12:00')
      .locale(ptBR)
      .format('DD [de] MMMM [de] YYYY [ás] HH:00[h]'),
    batch: '1',
    local: 'Beira Rio',
    paymentForm: PaymentMethodEnum.paypal,
    image: '',
    totalValue: 50,
    eventLocal: 'Arena do Grêmio',
    eventDate: dayjs('2022-11-11 12:00')
      .locale(ptBR)
      .format('DD/MM/YYYY [ás] HH:00[h]'),
  },
];

export const listPurcharses = async (): Promise<Purcharse[]> => {
  await delay();

  return purcharse;
};

export const createPayment = async (data: Purcharse): Promise<Purcharse> => {
  const {
    cardName,
    cardNumber,
    eventDate,
    eventLocal,
    eventTitle,
    expirationDate,
    name,
    paymentCode,
    securityCode,
    value,
    address,
    age,
    city,
    cpf,
    mail,
    number,
    state,
    zip,
  } = data;

  return {
    cardName,
    cardNumber,
    eventDate,
    eventLocal,
    eventTitle,
    expirationDate,
    name,
    paymentCode,
    securityCode,
    value,
    address,
    age,
    city,
    cpf,
    mail,
    number,
    state,
    zip,
  };
};
