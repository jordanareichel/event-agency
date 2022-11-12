import React, { useEffect, useState, useContext } from 'react';

import { PaymentMethodEnum } from '../../apk/Events/types';
import { listPurcharses } from '../../apk/Purcharse';
import { PurcharseWithEvent } from '../../apk/Purcharse/types';
import { Header } from '../../components/Header';
import { Modal } from '../../components/Modal';
import { UserContext } from '../../context/Auth';
import { Wrapper, TableTicket } from '../../pages_components/tickets/styles';
import currency from '../../utils/currency';

export const COLUMNS = [
  {
    Header: 'Código',
    accessor: 'id_number',
  },
  {
    Header: 'Ingresso',
    accessor: 'firstName',
  },
  {
    Header: 'Tipo de cartão',
    accessor: 'department',
  },
  {
    Header: 'Nome do cartão',
    accessor: 'lastName',
  },
  {
    Header: 'Número do cartão',
    accessor: 'email',
  },

  {
    Header: 'Valor',
    accessor: 'dateJoined',
  },
];

export default function Tickets() {
  const { isLogged } = useContext(UserContext);
  const [tickets, setTickets] = useState<PurcharseWithEvent[]>([]);

  useEffect(() => {
    getMyTickets();
  }, []);

  async function getMyTickets() {
    try {
      const response = await listPurcharses();
      setTickets(response);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <Wrapper>
      <Header
        title={isLogged ? 'Logout' : 'Login'}
        isLogged={isLogged}
        url={isLogged ? '/logout' : '/login'}
      />

      {tickets.length ? (
        <TableTicket>
          <thead>
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Evento</th>
              <th scope="col">Lote</th>
              <th scope="col">Horário</th>
              <th scope="col">Cartão</th>
              <th scope="col">Número do Cartão</th>
              <th scope="col">Valor</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((item, index) => (
              <tr key={index} className="bg-white border-b ">
                <th scope="row">#{item.code}</th>
                <td>{item.title}</td>
                <td>{item.batch}</td>
                <td>{item.createdAt}</td>
                <td>
                  {item.paymentForm === PaymentMethodEnum.credit
                    ? 'VISA'
                    : 'PAYPAL'}
                </td>
                <td>{item.cardNumber}</td>
                <td>{currency(item.value)}</td>
              </tr>
            ))}
          </tbody>
        </TableTicket>
      ) : (
        <Modal title="Opss!" visible={false} actions={[]} />
      )}
    </Wrapper>
  );
}
