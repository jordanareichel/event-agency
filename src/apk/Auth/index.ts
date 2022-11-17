import delay from '../delay';

import { SignInData, Auth, SessionFind } from './types';

export const signIn = async (data: SignInData): Promise<Auth> => {
  await delay();

  const { mail, password } = data;

  if (mail !== 'admin@admin.com' || password !== '123456') {
    throw new Error('E-mail ou senha incorreto. Tente novamente.');
  }

  return {
    code: '1',
    token: 'token-admin-01',
    mail: 'admin@admin.com',
    name: 'Administrador',
    isLogged: true,
  };
};

export const findSession = async (data: SessionFind): Promise<Auth> => {
  const { code } = data;

  return {
    code,
    mail: 'admin@admin.com',
    name: 'Administrador',
    token: 'token-admin-01',
    isLogged: true,
  };
};
