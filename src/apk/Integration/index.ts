import axios from 'axios';

import { FindCepData, CepProps, IntegrationCepData } from './types';

export const findCep = async (
  data: FindCepData,
): Promise<IntegrationCepData[]> => {
  const { cep } = data;
  const value = cep.replace(/\D/g, '');

  return await axios.get(`https://viacep.com.br/ws/${value}/json`);
};
