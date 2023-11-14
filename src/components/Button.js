import styled from 'styled-components';

export default styled.button`
  width: 100%;
  height: 52px;

  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);

  font-size: 16px;
  font-weight: 700;
  color: #fff;

  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background-color: #CCC;

    cursor: default;
  }
`;
