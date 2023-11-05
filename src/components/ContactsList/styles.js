import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: #222;
    font-size: 24px;
  }

  a {
    padding: 8px 16px;
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};

    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: 700;
    text-decoration: none;

    transition: all 0.2s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    margin-bottom: 8px;

    button {
      background-color: transparent;

      border: none;

      display: flex;
      align-items: center;

      span {
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: 700;

        margin-right: 8px;
      }
    }
  }
`;

export const Card = styled.div`
  background-color: #fff;

  border-radius: 4px;
  padding: 16px;

  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background-color: ${({ theme }) => theme.colors.primary.lighter};

        color: ${({ theme }) => theme.colors.primary.main};

        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;

        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      margin-top: 4px;

      color: ${({ theme }) => theme.colors.gray[200]};
      font-size: 14px;
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background-color: transparent;

      border: none;

      margin-left: 8px;
    }
  }
`;
