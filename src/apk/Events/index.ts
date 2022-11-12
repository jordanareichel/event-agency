import dayjs from 'dayjs';
import ptBR from 'dayjs/locale/pt-br';

import delay from '../delay';

import { EventResume, FindEvent, PaymentMethodEnum } from './types';

const events = [
  {
    code: '1',
    value: [
      {
        code: '1234',
        batch: 1,
        row: 'FILA A',
        value: 17.5,
      },
      {
        code: '5678',
        batch: 2,
        row: 'FILA B',
        value: 18.5,
      },
      {
        code: '9112',
        batch: 3,
        row: 'FILA C',
        value: 18.5,
      },
    ],
    createdAt: dayjs('2022-11-11 12:00')
      .locale(ptBR)
      .format('DD/MM/YYYY [ás] HH:00[h]'),
    title: 'Warung Beach Club | Sven Väth | Roy Rosenfeld | Tim Green',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: require('../../assets/event.jpeg'),
    local: 'Arena do Grêmio',
    paymentForm: PaymentMethodEnum.credit,
    totalValue: 50,
    geral: [
      {
        localMap: 'Mesas',
      },
      {
        localMap: 'Estacionamento',
      },
      {
        localMap: 'Bilheteria',
      },
      {
        localMap: 'Banheiros',
      },
    ],
  },
  {
    code: '2',
    value: [
      {
        code: '1234',
        batch: 1,
        row: 'FILA A',
        value: 17.5,
      },
      {
        code: '5678',
        batch: 2,
        row: 'FILA B',
        value: 18.5,
      },
      {
        code: '9112',
        batch: 3,
        row: 'FILA C',
        value: 18.5,
      },
    ],
    createdAt: dayjs('2022-11-11 12:00')
      .locale(ptBR)
      .format('DD/MM/YYYY [ás] HH:00[h]'),
    title: 'Rei Leão - O Musical',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: require('../../assets/event-1.jpeg'),
    local: 'Beira Rio',
    paymentForm: PaymentMethodEnum.credit,
    totalValue: 50,
    geral: [
      {
        localMap: 'Mesas',
      },
      {
        localMap: 'Estacionamento',
      },
      {
        localMap: 'Bilheteria',
      },
      {
        localMap: 'Banheiros',
      },
    ],
  },
  {
    code: '3',
    value: [
      {
        code: '1234',
        batch: 1,
        row: 'FILA A',
        value: 17.5,
      },
      {
        code: '5678',
        batch: 2,
        row: 'FILA B',
        value: 18.5,
      },
      {
        code: '9112',
        batch: 3,
        row: 'FILA C',
        value: 18.5,
      },
    ],
    createdAt: dayjs('2022-11-11 12:00')
      .locale(ptBR)
      .format('DD/MM/YYYY [ás] HH:00[h]'),
    title: 'Curso de Extensão: Atualização em Hematologia e Hemoterapia',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: require('../../assets/event-2.jpeg'),
    local: 'Gigantinho',
    paymentForm: PaymentMethodEnum.credit,
    totalValue: 50,
    geral: [
      {
        localMap: 'Mesas',
      },
      {
        localMap: 'Estacionamento',
      },
      {
        localMap: 'Bilheteria',
      },
      {
        localMap: 'Banheiros',
      },
    ],
  },
  {
    code: '4',
    value: [
      {
        code: '1234',
        batch: 1,
        row: 'FILA A',
        value: 17.5,
      },
      {
        code: '5678',
        batch: 2,
        row: 'FILA B',
        value: 18.5,
      },
      {
        code: '9112',
        batch: 3,
        row: 'FILA C',
        value: 18.5,
      },
    ],
    createdAt: dayjs('2022-11-11 12:00')
      .locale(ptBR)
      .format('DD/MM/YYYY [ás] HH:00[h]'),
    batch: '3',
    title: 'Badin o colono, novo show',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: require('../../assets/event-3.jpeg'),
    local: 'Arena do Grêmio',
    paymentForm: PaymentMethodEnum.paypal,
    totalValue: 50,
    geral: [
      {
        localMap: 'Mesas',
      },
      {
        localMap: 'Estacionamento',
      },
      {
        localMap: 'Bilheteria',
      },
      {
        localMap: 'Banheiros',
      },
    ],
  },
  {
    code: '5',
    value: [
      {
        code: '1234',
        batch: 1,
        row: 'FILA A',
        value: 17.5,
      },
      {
        code: '5678',
        batch: 2,
        row: 'FILA B',
        value: 18.5,
      },
      {
        code: '9112',
        batch: 3,
        row: 'FILA C',
        value: 18.5,
      },
    ],
    createdAt: dayjs('2022-11-11 12:00')
      .locale(ptBR)
      .format('DD/MM/YYYY [ás] HH:00[h]'),
    title: 'Curso de Extensão: Atualização em Hematologia e Hemoterapia',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: require('../../assets/event-2.jpeg'),
    local: 'Gigantinho',
    paymentForm: PaymentMethodEnum.paypal,
    totalValue: 50,
    geral: [
      {
        localMap: 'Mesas',
      },
      {
        localMap: 'Estacionamento',
      },
      {
        localMap: 'Bilheteria',
      },
      {
        localMap: 'Banheiros',
      },
    ],
  },
  {
    code: '6',
    value: [
      {
        code: '1234',
        batch: 1,
        row: 'FILA A',
        value: 17.5,
      },
      {
        code: '5678',
        batch: 2,
        row: 'FILA B',
        value: 18.5,
      },
      {
        code: '9112',
        batch: 3,
        row: 'FILA C',
        value: 18.5,
      },
    ],
    createdAt: dayjs('2022-11-11 12:00')
      .locale(ptBR)
      .format('DD/MM/YYYY [ás] HH:00[h]'),
    title: 'Badin o colono, novo show',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: require('../../assets/event-3.jpeg'),
    local: 'Beira Rio',
    paymentForm: PaymentMethodEnum.paypal,
    totalValue: 50,
    geral: [
      {
        localMap: 'Mesas',
      },
      {
        localMap: 'Estacionamento',
      },
      {
        localMap: 'Bilheteria',
      },
      {
        localMap: 'Banheiros',
      },
    ],
  },
  {
    code: '7',
    value: [
      {
        code: '1234',
        batch: 1,
        row: 'FILA A',
        value: 17.5,
      },
      {
        code: '5678',
        batch: 2,
        row: 'FILA B',
        value: 18.5,
      },
      {
        code: '9112',
        batch: 3,
        row: 'FILA C',
        value: 18.5,
      },
    ],
    createdAt: dayjs('2022-11-11 12:00')
      .locale(ptBR)
      .format('DD/MM/YYYY [ás] HH:00[h]'),
    title: 'Curso de Extensão: Atualização em Hematologia e Hemoterapia',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: require('../../assets/event-2.jpeg'),
    local: 'Arena do Grêmio',
    paymentForm: PaymentMethodEnum.paypal,
    totalValue: 50,
    geral: [
      {
        localMap: 'Mesas',
      },
      {
        localMap: 'Estacionamento',
      },
      {
        localMap: 'Bilheteria',
      },
      {
        localMap: 'Banheiros',
      },
    ],
  },
  {
    code: '8',
    value: [
      {
        code: '1234',
        batch: 1,
        row: 'FILA A',
        value: 17.5,
      },
      {
        code: '5678',
        batch: 2,
        row: 'FILA B',
        value: 18.5,
      },
      {
        code: '9112',
        batch: 3,
        row: 'FILA C',
        value: 18.5,
      },
    ],
    createdAt: dayjs('2022-11-11 12:00')
      .locale(ptBR)
      .format('DD/MM/YYYY [ás] HH:00[h]'),
    title: 'Badin o colono, novo show',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: require('../../assets/event-3.jpeg'),
    local: 'Arena do Grêmio',
    paymentForm: PaymentMethodEnum.paypal,
    totalValue: 50,
    geral: [
      {
        localMap: 'Mesas',
      },
      {
        localMap: 'Estacionamento',
      },
      {
        localMap: 'Bilheteria',
      },
      {
        localMap: 'Banheiros',
      },
    ],
  },
];

export const listEvents = async (): Promise<EventResume[]> => {
  await delay();

  return events;
};

export const findEvent = async (data: FindEvent): Promise<EventResume[]> => {
  const { code } = data;
  const result = events.filter(item => item.code === code);
  return result;
};
