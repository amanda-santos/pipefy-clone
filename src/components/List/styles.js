import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;

  /* flex-grow, flex-shrink, flex-basis */
  flex: 0 0 320px;

  opacity: ${props => props.done ? 0.6 : 1};

  /* estilizar toda div que tem uma div antes (ou seja, todas menos a primeira) */
  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 32px;
      height: 32px;
      border-radius: 18px;
      background: #AC8AF1;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
