import styled, { css } from 'styled-components';

import { Button } from '../Button';
import { Text } from '../Text';
import {Paper} from '../Paper';

import { CardProps } from './Card.types';

export const Wrapper = styled(Paper)<CardProps>`
  ${({ size, height }) => css`
    background-color: #ffffff;
    width: ${size ? size : '235'}px;
    min-height:${height ? height : '290'}px;
  `}
  display: flex;
  border-radius: 8px;
  cursor: pointer;
`;

export const Body = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin: 0 0 10px;
  padding: 16px;
`;

export const Title = styled(Text)`
  margin: 8px 0 0;
`;

export const Description = styled(Text)`
  margin: 10px 0 0;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0 0;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const View = styled(Button)`
  display: flex;
  justify-content: flex-start;
`;

export const Actions = styled.section`
  display: flex;
  align-items: center;
  transition: 0.4s ease;
  justify-content: space-between;

  & > span {
    cursor: pointer;
    margin-right: 8px;
  }
`;
