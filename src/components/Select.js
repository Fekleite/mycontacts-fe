import styled from 'styled-components';

export default styled.select`
  width: 100%;
  height: 52px;

  border-radius: 4px;
  border: 2px solid #fff;
  outline: none;
  padding: 0 16px;

  background: #FFF;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);

  font-size: 16px;

  transition: border-color 0.2s ease-in;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
