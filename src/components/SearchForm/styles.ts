import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1120px;
  margin: 4rem auto 0;
`

export const ContentForm = styled.form`
  gap: 1rem;
  display: flex;

  input {
    flex: 1;
    width: 100%;
    height: 54px;
    padding: 0 1.25rem;

    border: 0;
    border-radius: 6px;

    color: ${({ theme }) => theme['gray-300']};
    background-color: ${({ theme }) => theme['gray-900']};

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  @media (max-width: 1200px) {
    padding: 0rem 1.25rem;
  }
`

export const ButtonSearch = styled.button`
  width: 147px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  padding: 0.875rem 2rem;

  gap: 0.75rem;

  border: 0;
  border-radius: 6px;
  color: ${({ theme }) => theme['green-300']};
  border: 1px solid ${({ theme }) => theme['green-300']};

  background: transparent;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['green-500']};
  }

  span {
    font-weight: bold;

    @media (max-width: 769px) {
      display: none;
    }
  }

  @media (max-width: 769px) {
    width: 54px;
    padding: 0 15px;
  }
`
