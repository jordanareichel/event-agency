export type AuthUser = {
  code: string;
  mail: string;
  name: string;
};

export type Auth = {
  code: string;
  token: string;
  mail: string;
  name: string;
  isLogged?: boolean;
};

export type SignInData = {
  mail: string;
  password: string;
};

export type SessionFind = {
  code: string;
};

export type UserType = {
  code?: string;
  mail?: string;
  cpf: string;
  name: string;
  birthday?: Date;
  cep?: string;
  number?: string;
  city?: string;
  state?: string;
  gender?: string;
  password?: string;
  passwordConfirm?: string;
  phone?: string;
  address?: string;
};
