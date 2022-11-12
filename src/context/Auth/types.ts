import React from 'react';

import { SignInData as SignInProps, Auth } from '../../apk/Auth/types';
import { User } from '../../apk/User/types';

export type SignInData = SignInProps;

export interface UserContextData {
  user: Auth;
  isLogged: boolean;
  signInData: (data: SignInData) => Promise<void>;
  createAccountUser: (data: User) => Promise<void>;
  // logout: () => void;
}

export interface UserProviderProps {
  children: React.ReactNode;
}
