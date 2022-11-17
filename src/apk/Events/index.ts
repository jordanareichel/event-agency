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
    title: 'ENFERMEIRO SINCERO',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: require('../../assets/event-11.jpg'),
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
    title: 'RINDO AFÚ / UM GRANDE ELENCO / STAND UP COMEDY',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: require('../../assets/event-10.jpg'),
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
    title: 'ARMAGEDDON 2022 - LONDRINA / PR',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: require('../../assets/event-7.jpg'),
    local: 'Autódromo de Londrina',
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
    title: 'SHOW NACIONAL GABRIELA ROCHA - LAGES / SC',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: require('../../assets/event-8.jpg'),
    local: 'Centro Serra Lages',
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
    title: 'SHOW PAULINHO MIXARIA - TUBARÃO / SC',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: require('../../assets/event-9.jpg'),
    local: 'Arena Multiuso',
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
    code: '9',
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
    title: 'BADIN / STAND UP COMEDY',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: require('../../assets/event-3.jpeg'),
    local: 'Comedy Club Porto Alegre',
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
    code: '10',
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
    title: '6ª EXPO MOTORHOME PREVIEW - BRASÍLIA / DF',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    image: require('../../assets/event-6.jpg'),
    local: 'Pavilhão de Exposições',
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
  return events;
};

export const findEvent = async (data: FindEvent): Promise<EventResume[]> => {
  const { code } = data;
  const result = events.filter(item => item.code === code);
  return result;
};
