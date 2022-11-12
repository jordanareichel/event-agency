import React, { createContext, useState } from 'react';

import { signIn } from '../../apk/Auth';
import { Auth } from '../../apk/Auth/types';
import { createAccount } from '../../apk/User';
import { User } from '../../apk/User/types';

import { SignInData, UserContextData, UserProviderProps } from './types';

const DEFAULT_USER_DATA = {} as Auth;

export const UserContext = createContext<UserContextData>(
  {} as UserContextData,
);

export const UserProvider: React.FC<UserProviderProps> = props => {
  const { children } = props;
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [user, setUser] = useState<Auth>(DEFAULT_USER_DATA);

  async function signInData(data: SignInData) {
    const response = await signIn(data);

    setIsLogged(true);
    setUser({ ...response });

    localStorage.setItem('user', JSON.stringify({ ...response }));
  }

  // async function logout() {
  //   Cookies.remove('user');
  //   setIsLogged(false);
  //   setUser(DEFAULT_USER_DATA);
  // }

  async function createAccountUser(data: User) {
    const response = await createAccount(data);
    const { userMail, name } = response;

    setUser({
      mail: userMail,
      code: '2',
      name,
      token: 'token-admin-02',
      isLogged: true,
    });

    localStorage.setItem('user', JSON.stringify({ ...response }));
  }

  return (
    <UserContext.Provider
      value={{
        user,
        isLogged,
        signInData,
        createAccountUser,
        // logout,
      }}>
      {children}
    </UserContext.Provider>
  );
};
