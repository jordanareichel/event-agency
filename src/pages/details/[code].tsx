import React, { useContext, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { listEvents } from '../../apk/Events';
import { EventResume } from '../../apk/Events/types';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Image } from '../../components/Image';
import { Modal } from '../../components/Modal';
import { Text } from '../../components/Text';
import { UserContext } from '../../context/Auth';
import {
  Wrapper,
  Body,
  Ticket,
  Col,
  Payments,
  Description,
  Geral,
  Informations,
  Cards,
  Grid,
  Actions,
} from '../../pages_components/details/styles';
import currency from '../../utils/currency';

export enum ModalTypeEnum {
  'close' = 'CLOSE',
  'error' = 'ERROR',
  'confirm' = 'CONFIRM',
}

export default function Details() {
  const { isLogged } = useContext(UserContext);
  const router = useRouter();
  const query = router.query;
  const code = query.code;
  const [data, setData] = useState<EventResume>();
  const [modalType, setModalType] = useState<ModalTypeEnum>(
    ModalTypeEnum.close,
  );
  const [modalMessage, setModalMessage] = useState<string>('');
  const [selectedBatch, setSelectedBatch] = useState<string>('');

  useEffect(() => {
    handleFindEvent();
  }, [data, code]);

  function handleClose() {
    setModalType(ModalTypeEnum.close);
  }

  async function handleFindEvent() {
    try {
      const response = await listEvents();
      const event = response.find(item => item.code === code);
      if (event) {
        setData(event);
      }
    } catch (err) {
      alert(err);
    }
  }

  function handleGoCheckout() {
    if (!isLogged) {
      setModalType(ModalTypeEnum.error);
      setModalMessage(
        'Você precisa ter cadastro pra realizar a compra do ingresso! Se já possuir, faça o Login',
      );
    } else if (!selectedBatch) {
      setModalType(ModalTypeEnum.error);
      setModalMessage(
        'Você precisa selecionar o lote e o valor do ingresso para prosseguir',
      );
    } else {
      setModalType(ModalTypeEnum.confirm);
      setModalMessage('Deseja prosseguir com a compra do ingresso?');
    }
  }

  function handleSubmit() {
    router.push(`/purchase/${data?.code}`);
  }

  function handleSelectedBatch(code: string) {
    setSelectedBatch(code);
  }

  function handleGoLogin() {
    router.push('/login');
  }

  return (
    <Wrapper>
      <Header
        title={isLogged ? 'Logout' : 'Login'}
        isLogged={isLogged}
        url={isLogged ? '/logout' : '/login'}
      />
      <Modal
        title="Atenção!"
        visible={modalType !== ModalTypeEnum.close}
        actions={[
          {
            color: '#EE4629',
            variant: 'ghost',
            label: 'Cancelar',
            onClick: handleClose,
          },
          {
            label: 'Confirmar',
            color: '#129E57',
            variant: 'ghost',
            onClick:
              modalType === ModalTypeEnum.confirm
                ? handleSubmit
                : modalType === ModalTypeEnum.error &&
                  modalMessage.includes('Login')
                ? handleGoLogin
                : handleClose,
          },
        ]}>
        <Text size={16} align={'left'} height={20}>
          {modalMessage}
        </Text>
      </Modal>
      <main>
        <Body>
          <Payments>
            <Image
              src={require('../../assets/png/cards.png')}
              alt="Credit Card"
              width={300}
              height={200}
            />
            <Image
              src={require('../../assets/png/paypal.png')}
              alt="Credit Card"
              width={100}
              height={200}
            />
          </Payments>
          {data &&
            data.value.map((item, index) => (
              <Ticket
                borderWidth={selectedBatch === item.code ? 2 : 1}
                borderColor={selectedBatch === item.code ? 'green' : 'white'}
                key={index}
                radius={4}
                onClick={() => handleSelectedBatch(item.code)}>
                <Col>
                  <Text color="red" size={14} align="left" weight="bold">
                    LOTE: {item.batch}
                  </Text>
                  <Description align="left" weight="bold">
                    {item.row}
                  </Description>
                </Col>
                <div>
                  <Text align="left" weight="bold">
                    {currency(item.value)}
                  </Text>
                </div>
              </Ticket>
            ))}
          <Actions>
            <Button
              block
              color="#F7DD43"
              shape="square"
              fontColor="black"
              onClick={() => router.push('/')}>
              VOLTAR
            </Button>
            <Button
              block
              color="#F7DD43"
              shape="square"
              fontColor="black"
              onClick={handleGoCheckout}>
              CHECKOUT
            </Button>
          </Actions>
        </Body>
      </main>
      {data && (
        <Card
          height={500}
          size={390}
          description={data.description}
          title={data.title}
          image={data.image}
          onSubmit={function (): void {
            throw new Error('Function not implemented.');
          }}
          date={data.createdAt}
          local={data.local}
          withoutFooter
        />
      )}
      <Geral>
        <Informations flexDirection="column" radius={4}>
          <Text size={18} align="left" weight="bold" height={32}>
            Informações gerais
          </Text>
          <Text size={14} align="left" height={22}>
            Informações sobre o local {data?.local}:
          </Text>
          <Text size={14} align="left" height={22}>
            - As mesas são compartilhadas.
          </Text>
          <Text size={14} align="left" height={22}>
            - A escolha dos lugares da casa são por ordem de chegada, por isso é
            importante chegar cedo para garantir um bom lugar.
          </Text>
        </Informations>
        <div>
          {' '}
          <Informations flexDirection="column" radius={4}>
            <Text size={18} align="left" weight="bold">
              Estrutura do local
            </Text>
          </Informations>
          <Grid>
            {data?.geral?.map((item, index) => (
              <Cards key={index} radius={4}>
                <Text size={14} height={22}>
                  {item.localMap}
                </Text>
              </Cards>
            ))}
          </Grid>
        </div>
      </Geral>
    </Wrapper>
  );
}
