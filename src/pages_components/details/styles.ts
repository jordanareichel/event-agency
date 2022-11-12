import styled from 'styled-components';

import { Paper } from '../../components/Paper';
import { Text } from '../../components/Text';

export const Wrapper = styled.div`
  max-width: 1124px;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 7rem;
  align-items: center;
  justify-content: center;
  margin: 70px auto;
`;

export const Body = styled.div``;

export const Ticket = styled(Paper)`
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  cursor: pointer;
  margin: 0 0 10px;
`;

export const Description = styled(Text)`
  margin: 4px 0 0;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Payments = styled.div`
  margin: 0 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Geral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Informations = styled(Paper)`
  padding: 16px;
  margin: 10px 0 0;
  width: 300px;
`;

export const Cards = styled(Paper)`
  padding: 16px;
`;

export const Grid = styled.div`
  margin: 10px 0 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > p {
    cursor: pointer;
    margin-right: 8px;
  }

  & > button:first-child {
    width: 400px;
  }

  & > button:last-child {
    width: 400px;
    margin: 10px 0;
  }
`;
