import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  margin-bottom: 56px;
`;

export const Search = styled.div`
  margin: 85px 30px 0px;
`;

export const CardView = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 28px;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 32px;
`;
