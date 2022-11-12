import styled from 'styled-components';

import { Text } from '../Text';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled(Text)`
  text-align: left;
  margin-bottom: 4px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Help = styled.div`
  display: flex;
  margin-top: 8px;
  flex-direction: row;

  & > span {
    font-size: 16px;
    margin-right: 4px;
  }
`;
