import React, { useContext, useState } from 'react';

import _ from 'lodash';
import router from 'next/router';

import { findCep } from '../../apk/Integration';
import { User } from '../../apk/User/types';
import { Button } from '../../components/Button';
import { FormGroup } from '../../components/FormGroup';
import { Header } from '../../components/Header';
import { InputMaskEnum } from '../../components/Input';
import { Input } from '../../components/Input/Input.comp';
import { Modal } from '../../components/Modal';
import { Text } from '../../components/Text';
import { UserContext } from '../../context/Auth';
import {
  Form,
  Wrapper,
  FormInput,
  Actions,
  FormLogin,
} from '../../pages_components/login/styles';
import mailValidator from '../../utils/email-validator';

const REGISTER_DEFAULT: User = {
  name: '',
  userMail: '',
  gender: '',
  zip: '',
  state: '',
  city: '',
  address: '',
  userPassword: '',
  confirmPassword: '',
};

export default function Login() {
  const { signInData, createAccountUser, isLogged, logout } =
    useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [errors, setErrors] = useState({});
  const [register, setRegister] = useState({
    login: '',
    password: '',
  });

  const [created, setCreated] = useState<User>({
    ...REGISTER_DEFAULT,
  });

  function handleChange(key: string, value: any) {
    if (key === 'zip' && value.length === 10) {
      consultCep(value);
    }

    setErrors(prevErrors => ({ ...prevErrors, [key]: undefined }));
    setRegister(prevRegister => ({ ...prevRegister, [key]: value }));
    setCreated(prevRegister => ({ ...prevRegister, [key]: value }));
  }

  async function consultCep(value: string) {
    try {
      const cep = await findCep({ cep: value });

      if (cep) {
        setCreated(prevRegister => {
          Object.keys(cep).forEach((key: any) => {
            _.set(prevRegister, key, cep[key]);
          });

          return { ...prevRegister };
        });
      }
    } catch (err) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin() {
    const newErrors = {};
    try {
      if (!register.login) {
        _.set(newErrors, 'login', 'Informe o E-mail.');
      } else if (!mailValidator.validate(register.login.toString())) {
        _.set(newErrors, 'login', 'CPF inválido.');
      }

      if (!register.password) {
        _.set(newErrors, 'password', 'Informe a senha.');
      }

      if (Object.keys(newErrors).length) {
        setErrors(newErrors);
        return;
      }

      setLoading(true);
      await signInData({ mail: register.login, password: register.password });
      router.push('/home');
    } catch (err) {
      setLoading(false);
      setOpenModal(true);
      const responseErrors: { path: string; error: string }[] = _.get(
        err,
        'errors',
        [],
      );

      if (responseErrors.length) {
        responseErrors.forEach(error => {
          _.set(newErrors, error.path, error.error);
        });
        setErrors(newErrors);
      } else {
        setErrors({
          password: _.get(
            err,
            'message',
            'Não foi possível atender sua solicitação.',
          ),
        });
      }
    }
  }

  async function handleCreateAccount() {
    const validations = {};
    try {
      const {
        name,
        userMail,
        address,
        number,
        city,
        state,
        zip,
        confirmPassword,
        userPassword,
        gender,
        phone,
      } = created;

      if (!userMail) {
        _.set(validations, 'userMail', 'Informe um e-mail');
      } else if (!mailValidator.validate(userMail.toString())) {
        _.set(validations, 'login', 'CPF inválido.');
      }

      if (!name) {
        _.set(validations, 'name', 'Informe um nome');
      }

      if (!gender) {
        _.set(validations, 'gender', 'Informe o sexo');
      }

      if (!phone) {
        _.set(validations, 'phone', 'Informe o telefone');
      }

      if (!userPassword || !confirmPassword) {
        _.set(validations, 'userPassword', 'Informe sua senha');
      } else if (confirmPassword !== userPassword) {
        _.set(validations, 'userPassword', 'Senhas não conferem');
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
        _.set(validations, 'city', 'Informe o cidade.');
      }

      if (!state) {
        _.set(validations, 'state', 'Informe o estado.');
      }

      if (Object.keys(validations).length) {
        setErrors(validations);
        return;
      }

      await createAccountUser({ ...created });

      router.push('/home');
    } catch (err) {
      setLoading(false);
      setOpenModal(true);
      const responseErrors: { path: string; error: string }[] = _.get(
        err,
        'errors',
        [],
      );

      if (responseErrors.length) {
        responseErrors.forEach(error => {
          _.set(validations, error.path, error.error);
        });
        setErrors(validations);
      } else {
        setErrors({
          password: _.get(
            err,
            'message',
            'Não foi possível atender sua solicitação.',
          ),
        });
      }
    }
  }

  function handleNavigation() {
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
        logout={handleNavigation}
      />
      <Modal
        loading={loading}
        title="Opss!"
        visible={openModal}
        actions={[
          {
            label: 'Confirmar',
            variant: 'ghost',
            onClick: () => setOpenModal(false),
          },
        ]}>
        <Text color="black" align="left" size={14}>
          Não foi possível realizar sua solicitação. Tente novamente!
        </Text>
      </Modal>
      <main>
        <Text color="white" size={24}>
          Faça o Login
        </Text>
        <Form>
          <FormLogin>
            <FormGroup help={_.get(errors, 'login')}>
              <Input
                block
                width="50"
                placeholder="E-mail"
                disabled={loading}
                value={register.login}
                onChangeText={value => handleChange('login', value)}
                color={_.get(errors, 'login') && 'error'}
              />
            </FormGroup>
          </FormLogin>
          <FormLogin>
            <FormGroup help={_.get(errors, 'password')}>
              <Input
                block
                type={'password'}
                width="50"
                placeholder={'Senha'}
                disabled={loading}
                value={register.password}
                onChangeText={value => handleChange('password', value)}
                color={_.get(errors, 'password') && 'error'}
              />
            </FormGroup>
          </FormLogin>
        </Form>
        <Actions>
          <Button
            block
            color="#F7DD43"
            shape="square"
            fontColor="black"
            onClick={handleLogin}>
            ENTRAR
          </Button>
        </Actions>
      </main>
      <div>
        <Text color="white" size={24}>
          Cadastre-se
        </Text>
        <Form>
          <FormInput>
            <FormGroup help={_.get(errors, 'name')}>
              <Input
                block
                placeholder="Nome Completo"
                disabled={loading}
                value={created.name}
                onChangeText={value => handleChange('name', value)}
                color={_.get(errors, 'name') && 'error'}
              />
            </FormGroup>
            <FormGroup help={_.get(errors, 'userMail')}>
              <Input
                block
                type={'userMail'}
                placeholder={'E-mail'}
                disabled={loading}
                value={created.userMail}
                onChangeText={value => handleChange('userMail', value)}
                color={_.get(errors, 'userMail') && 'error'}
              />
            </FormGroup>
          </FormInput>
          <FormInput>
            <FormGroup help={_.get(errors, 'phone')}>
              <Input
                block
                placeholder="Telefone"
                mask={InputMaskEnum.phone}
                disabled={loading}
                value={created.phone}
                onChangeText={value => handleChange('phone', value)}
                color={_.get(errors, 'phone') && 'error'}
              />
            </FormGroup>
            <FormGroup help={_.get(errors, 'gender')}>
              <Input
                block
                type={'text'}
                placeholder={'Sexo'}
                disabled={loading}
                value={created.gender}
                onChangeText={value => handleChange('gender', value)}
                color={_.get(errors, 'gender') && 'error'}
              />
            </FormGroup>
          </FormInput>
          <FormInput>
            <FormGroup help={_.get(errors, 'zip')}>
              <Input
                block
                placeholder="Cep"
                disabled={loading}
                value={created.zip}
                mask={InputMaskEnum.cep}
                maxLength={10}
                onChangeText={value => handleChange('zip', value)}
                color={_.get(errors, 'zip') && 'error'}
              />
            </FormGroup>
            <FormGroup help={_.get(errors, 'state')}>
              <Input
                block
                type={'text'}
                placeholder={'Estado'}
                disabled={loading}
                value={created.state}
                onChangeText={value => handleChange('state', value)}
                color={_.get(errors, 'state') && 'error'}
              />
            </FormGroup>
          </FormInput>
          <FormInput>
            <FormGroup help={_.get(errors, 'city')}>
              <Input
                block
                type={'text'}
                placeholder={'Cidade'}
                disabled={loading}
                value={created.city}
                onChangeText={value => handleChange('city', value)}
                color={_.get(errors, 'city') && 'error'}
              />
            </FormGroup>
          </FormInput>
          <FormInput>
            <FormGroup help={_.get(errors, 'address')}>
              <Input
                block
                placeholder="Endereço"
                disabled={loading}
                value={created.address}
                onChangeText={value => handleChange('address', value)}
                color={_.get(errors, 'address') && 'error'}
              />
            </FormGroup>
            <FormGroup help={_.get(errors, 'number')}>
              <Input
                block
                type={'text'}
                placeholder={'Número'}
                disabled={loading}
                value={created.number}
                onChangeText={value => handleChange('number', value)}
                color={_.get(errors, 'number') && 'error'}
              />
            </FormGroup>
          </FormInput>
          <FormInput>
            <FormGroup help={_.get(errors, 'userPassword')}>
              <Input
                type={'password'}
                block
                placeholder="Senha"
                disabled={loading}
                value={created.userPassword}
                onChangeText={value => handleChange('userPassword', value)}
                color={_.get(errors, 'userPassword') && 'error'}
              />
            </FormGroup>
            <FormGroup help={_.get(errors, 'confirmPassword')}>
              <Input
                block
                type={'password'}
                placeholder={'Confirmar Senha'}
                disabled={loading}
                value={created.confirmPassword}
                onChangeText={value => handleChange('confirmPassword', value)}
                color={_.get(errors, 'confirmPassword') && 'error'}
              />
            </FormGroup>
          </FormInput>
        </Form>
        <Actions>
          <Button
            block
            color="#F7DD43"
            shape="square"
            fontColor="black"
            onClick={handleCreateAccount}>
            CADASTRAR
          </Button>
        </Actions>
      </div>
    </Wrapper>
  );
}
