import React, { useContext, useEffect, useState } from 'react';

import { listEvents } from '@apk/Events';
import { EventResume, PaymentMethodEnum } from '@apk/Events/types';
import { createPayment } from '@apk/Purcharse';
import { Purcharse } from '@apk/Purcharse/types';
import { Button } from '@components/Button';
import { Card } from '@components/Card';
import { FormGroup } from '@components/FormGroup';
import { Header } from '@components/Header';
import { Input, InputMaskEnum } from '@components/Input';
import { Modal } from '@components/Modal';
import { Text } from '@components/Text';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { Radio } from 'react-radio-input';

import { UserContext } from '../../context/Auth';
import {
  Wrapper,
  Body,
  Form,
  FormInput,
  Title,
  InputRadio,
  Paypal,
} from '../../pages_components/purchase/styles';
import { cpf as validCpf } from '../../utils/cpf-cnpj-validator';
import currency from '../../utils/currency';

const REGISTER_DEFAULT: Purcharse = {
  name: '',
  age: '',
  mail: '',
  address: '',
  number: '',
  city: '',
  state: '',
  cardNumber: '',
  cardName: '',
  expirationDate: '',
  securityCode: '',
  cpf: '',
  zip: '',
  paymentCode: '',
  value: 0,
};

export enum ModalTypeEnum {
  'close' = 'CLOSE',
  'error' = 'ERROR',
  'confirm' = 'CONFIRM',
  'success' = 'SUCCESS',
}

export default function Payment() {
  const { isLogged, logout } = useContext(UserContext);
  const router = useRouter();
  const query = router.query;
  const code = query.code;

  const [errors, setErrors] = useState({});
  const [event, setEvent] = useState<EventResume>({} as EventResume);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalType, setModalType] = useState<ModalTypeEnum>(
    ModalTypeEnum.close,
  );
  const [modalMessage, setModalMessage] = useState<string>('');
  const [register, setRegister] = useState<Purcharse>({
    ...REGISTER_DEFAULT,
  });
  const initialValue = 'credit';
  const [typeCard, setTypeCard] = useState(initialValue);

  useEffect(() => {
    handleFindEvent();
  }, [code]);

  function handleClose() {
    setModalType(ModalTypeEnum.close);
  }

  async function handleFindEvent() {
    try {
      const response = await listEvents();
      const event = response.find(item => item.code === code);
      if (event) {
        setEvent(event);
      }
    } catch (err) {
      alert(err);
    }
  }

  function handleChange(key: string, value: any) {
    setRegister(prevRegister => ({ ...prevRegister, [key]: value }));
  }

  function validations() {
    const {
      name,
      age,
      mail,
      address,
      number,
      city,
      state,
      cardNumber,
      cardName,
      expirationDate,
      securityCode,
      cpf,
      zip,
    } = register;

    const validations = {};

    if (!mail) {
      _.set(validations, 'mail', 'E-mail inválido');
    }

    if (!name) {
      _.set(validations, 'name', 'Informe um nome');
    }

    if (!cpf || !validCpf.isValid(cpf)) {
      _.set(validations, 'cpf', 'CPF inválido');
    }

    if (!age) {
      _.set(validations, 'age', 'Informe sua idade');
    }

    if (!address) {
      _.set(validations, 'address', 'Informe o endereço');
    }

    if (!number) {
      _.set(validations, 'number', 'Informe o numero.');
    }

    if (!zip) {
      _.set(validations, 'zip', 'Informe um cep.');
    }

    if (!city) {
      _.set(validations, 'city', 'Informe a cidade.');
    }

    if (!state) {
      _.set(validations, 'state', 'Informe o estado.');
    }

    if (!cardNumber) {
      _.set(validations, 'cardNumber', 'Informe o número do cartão.');
    }

    if (!cardName) {
      _.set(validations, 'cardName', 'Informe o nome do cartão.');
    }

    if (!expirationDate) {
      _.set(
        validations,
        'expirationDate',
        'Informe a data de expiração do cartão.',
      );
    }

    if (!securityCode) {
      _.set(
        validations,
        'securityCode',
        'Informe o código de segurança o do cartão.',
      );
    }

    if (Object.keys(validations).length) {
      setErrors(validations);
      return;
    }

    setModalType(ModalTypeEnum.confirm);
    setModalMessage(
      `Deseja confirmar a compra do ingresso ${
        event?.title
      } no valor de ${currency(event?.totalValue)}?`,
    );
  }

  async function handleCreatePayment() {
    try {
      setLoading(true);
      const response = await createPayment({
        ...register,
        eventDate: event?.createdAt,
        eventLocal: event?.local,
        eventTitle: event?.title,
        paymentForm:
          typeCard === 'credit'
            ? PaymentMethodEnum.credit
            : PaymentMethodEnum.paypal,
      });

      localStorage.setItem('createPayment', JSON.stringify({ ...response }));
      setModalType(ModalTypeEnum.success);
      setModalMessage(
        'Parabéns você acabou de adquirir o ingresso. O que deseja fazer agora?',
      );
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setModalType(ModalTypeEnum.error);
      setModalMessage('Algo deu errado! Tente novamente.');
    }
  }

  function handleNavigate() {
    router.push('/tickets');
  }

  function handleGoLogout() {
    if (isLogged) {
      logout();
    } else {
      router.push('/login');
    }
  }

  return (
    <Wrapper>
      <Header
        title={isLogged ? 'Logout' : 'Login'}
        isLogged={isLogged}
        logout={handleGoLogout}
      />
      <Modal
        title="Atenção!"
        loading={loading}
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
                ? handleCreatePayment
                : modalType === ModalTypeEnum.success
                ? handleNavigate
                : handleClose,
          },
        ]}>
        <Text color="black" size={16} align="left" height={18}>
          {modalMessage}
        </Text>
      </Modal>
      <main>
        <Body>
          <Form>
            <Title color="white" align="left" size={18}>
              Complete os seus dados para a compra do ingresso
            </Title>
            <FormInput>
              <FormGroup help={_.get(errors, 'name')}>
                <Input
                  block
                  type={'text'}
                  placeholder="Nome completo?"
                  value={register.name}
                  onChangeText={value => handleChange('name', value)}
                  color={_.get(errors, 'age') && 'error'}
                />
              </FormGroup>
              <FormGroup help={_.get(errors, 'age')}>
                <Input
                  block
                  type={'number'}
                  placeholder="Idade"
                  maxLength={2}
                  value={register.age}
                  onChangeText={value => handleChange('age', value)}
                  color={_.get(errors, 'age') && 'error'}
                />
              </FormGroup>
            </FormInput>
            <FormInput>
              <FormGroup help={_.get(errors, 'mail')}>
                <Input
                  block
                  type={'text'}
                  placeholder={'E-mail'}
                  value={register.mail}
                  onChangeText={value => handleChange('mail', value)}
                  color={_.get(errors, 'mail') && 'error'}
                />
              </FormGroup>
            </FormInput>
            <FormInput>
              <FormGroup help={_.get(errors, 'zip')}>
                <Input
                  block
                  type={'text'}
                  placeholder="Cep"
                  value={register.zip}
                  mask={InputMaskEnum.cep}
                  onChangeText={value => handleChange('zip', value)}
                />
              </FormGroup>
              <FormGroup help={_.get(errors, 'state')}>
                <Input
                  block
                  type={'text'}
                  placeholder="Estado"
                  value={register.state}
                  onChangeText={value => handleChange('state', value)}
                  color={_.get(errors, 'state') && 'state'}
                />
              </FormGroup>
            </FormInput>
            <FormInput>
              <FormGroup help={_.get(errors, 'city')}>
                <Input
                  block
                  type={'text'}
                  placeholder={'Cidade'}
                  value={register.city}
                  onChangeText={value => handleChange('city', value)}
                  color={_.get(errors, 'city') && 'error'}
                />
              </FormGroup>
            </FormInput>
            <FormInput>
              <FormGroup help={_.get(errors, 'address')}>
                <Input
                  block
                  type={'text'}
                  placeholder="Endereço"
                  value={register.address}
                  onChangeText={value => handleChange('address', value)}
                />
              </FormGroup>
              <FormGroup help={_.get(errors, 'state')}>
                <Input
                  block
                  type={'number'}
                  placeholder="Número"
                  maxLength={2}
                  value={register.number}
                  onChangeText={value => handleChange('number', value)}
                  color={_.get(errors, 'age') && 'number'}
                />
              </FormGroup>
            </FormInput>
            <Title align="left" size={18} color="white">
              Informações de pagamento
            </Title>
            <FormInput>
              <InputRadio
                name="favoriteFruit"
                onChange={setTypeCard}
                selectedValue={typeCard}>
                <Text color="white">
                  <Radio id="bananaOption" value="credit" />
                  Cartão de crédito
                </Text>
                <Paypal color="white">
                  <Radio id="bananaOption" value="paypal" />
                  Paypal
                </Paypal>
              </InputRadio>
            </FormInput>
            <FormInput>
              <FormGroup help={_.get(errors, 'cardName')}>
                <Input
                  block
                  type={'text'}
                  placeholder={'Nome no cartão'}
                  value={register.cardName}
                  onChangeText={value => handleChange('cardName', value)}
                  color={_.get(errors, 'cardName') && 'error'}
                />
              </FormGroup>
            </FormInput>
            <FormInput>
              <FormGroup help={_.get(errors, 'cardNumber')}>
                <Input
                  block
                  type={'text'}
                  placeholder={'Numero no cartão'}
                  value={register.cardNumber}
                  maxLength={16}
                  onChangeText={value => handleChange('cardNumber', value)}
                  color={_.get(errors, 'cardNumber') && 'error'}
                />
              </FormGroup>
            </FormInput>
            <FormInput>
              <FormGroup help={_.get(errors, 'cpf')}>
                <Input
                  block
                  type={'text'}
                  maxLength={14}
                  mask={InputMaskEnum.cpf}
                  placeholder={'CPF'}
                  value={register.cpf}
                  onChangeText={value => handleChange('cpf', value)}
                  color={_.get(errors, 'cpf') && 'error'}
                />
              </FormGroup>
            </FormInput>
            <FormInput>
              <FormGroup help={_.get(errors, 'expirationDate')}>
                <Input
                  block
                  type={'text'}
                  placeholder={'Data de expiração MM/YYYY'}
                  maxLength={7}
                  value={register.expirationDate}
                  onChangeText={value => handleChange('expirationDate', value)}
                  color={_.get(errors, 'expirationDate') && 'error'}
                />
              </FormGroup>
              <FormGroup help={_.get(errors, 'securityCode')}>
                <Input
                  block
                  type={'number'}
                  maxLength={4}
                  placeholder={'Código de segurança'}
                  value={register.securityCode}
                  onChangeText={value => handleChange('securityCode', value)}
                  color={_.get(errors, 'securityCode') && 'error'}
                />
              </FormGroup>
            </FormInput>
            <Button
              block
              color="#F7DD43"
              shape="square"
              fontColor="black"
              onClick={validations}>
              CONFIRMAR PAGAMENTO
            </Button>
          </Form>
        </Body>
      </main>
      {event && (
        <Card
          height={600}
          size={450}
          image={event.image}
          totalValue={event.totalValue}
          title={event.title}
          description={event.description}
          date={event.createdAt}
          local={event.local}
          onSubmit={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      )}
    </Wrapper>
  );
}
