export type FindCepData = {
  cep: string;
};

export type CepProps = {
  cep: string;
  localidade: string;
  uf: string;
  logradouro: string;
  bairro: string;
  complemento: string;
};

export type IntegrationCepData = {
  cep: string;
  city: string;
  state: string;
  address: string;
  district: string;
  complement: string;
};
