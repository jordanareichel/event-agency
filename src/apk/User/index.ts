import delay from '../delay';

import { User } from './types';

export const createAccount = async (data: User): Promise<User> => {
  await delay();

  const {
    name,
    address,
    city,
    confirmPassword,
    gender,
    number,
    state,
    userMail,
    userPassword,
    zip,
  } = data;

  return {
    name,
    address,
    city,
    confirmPassword,
    gender,
    number,
    state,
    userMail,
    userPassword,
    zip,
  };
};
