import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1124px;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7rem;
  align-items: center;
  justify-content: center;
  margin: 70px auto;
`;

export const Form = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 0 auto;
`;

export const FormLogin = styled.div`
  margin-bottom: 10px;
`;

export const FormInput = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 0 10px;
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 16px;

  & > p {
    cursor: pointer;
    margin-right: 8px;
  }

  & > button:first-child {
    width: 460px;
    margin-right: 8px;
  }
`;
