import styled from 'styled-components';

import { Paper } from '../Paper';

export const Wrapper = styled(Paper)`
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  position: fixed;
  padding: 4px 32px;
  user-select: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #202024;
`;

export const NavLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > a > p {
    margin-left: 15px;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 48px;
`;
