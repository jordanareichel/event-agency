import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1124px;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const TableTicket = styled.table`
  margin: 80px;
  color: #373737;
  background-color: #ffffff;
  border-bottom: 2px solid #dadee3;

  td,
  th {
    padding: 16px;
    font-size: 15px;
    line-height: 21px;
    text-align: left;
  }
  width: 100%;
  border-spacing: 0;

  thead {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  }
`;
