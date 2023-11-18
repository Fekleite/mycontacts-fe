import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.60);

  backdrop-filter: blur(3.5px);

  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background-color: #FFF;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);

  border-radius: 4px;
  padding: 24px;

  width: 100%;
  max-width: 450px;

  h1 {
    font-size: 22px;
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background-color: transparent;

    border: none;
    margin-right: 8px;

    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
