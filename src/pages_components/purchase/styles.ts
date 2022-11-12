import { RadioGroup } from 'react-radio-input';
import styled from 'styled-components';

import { Text } from '../../components/Text';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-column: 2;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7rem;
  align-items: center;
  justify-content: center;
  margin: 80px 0;
`;

export const Body = styled.div`
  padding: 16px;
`;

export const Form = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 0 auto;
  width: 80%;
`;

export const FormInput = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 0 10px;
`;

export const Title = styled(Text)`
  margin-bottom: 10px;
`;

export const Line = styled.div`
  width: 100%;

  & > p {
    display: inline;
  }
`;

export const InputRadio = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > p > input {
    margin-right: 4px;
  }
`;

export const Paypal = styled(Text)`
  margin-left: 15px;
`;
