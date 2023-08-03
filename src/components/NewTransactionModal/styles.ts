import styled from 'styled-components'

import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overley = styled(Dialog.Overlay)`
  position: fixed;

  width: 100%;
  height: 100vh;

  inset: 0;

  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme['gray-100']};
  }

  form {
    > input {
      width: 100%;

      padding: 1rem;
      margin-bottom: 1rem;

      border: 0;
      outline: 0;
      border-radius: 6px;

      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme['gray-900']};
    }

    > button {
      width: 100%;
      height: 58px;

      border: 0;
      border-radius: 6px;

      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background-color: ${({ theme }) => theme['green-700']};
        transition: background-color 0.2s;
      }

      font-size: 1rem;
      font-weight: bold;
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme['green-500']};
    }
  }

  @media (max-width: 768px) {
    top: auto;

    left: 0;
    bottom: 0;

    padding: 2.5rem 1.5rem;

    transform: none;

    width: 100%;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`
export const TransactionType = styled(RadioGroup.Root)`
  width: 100%;

  margin-top: 0.5rem;
  margin-bottom: 2.5rem;

  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

interface TransactionTypeButton {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 58px;

  gap: 0.5rem;

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  font-weight: 500;
  color: ${({ theme }) => theme['gray-300']};
  background-color: ${({ theme }) => theme['gray-700']};

  > svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='checked'] {
    color: ${({ theme }) => theme.white};
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }

  &[data-state='unchecked']:hover {
    background-color: ${({ theme }) => theme['gray-600']};
  }
`

export const Close = styled(Dialog.Close)`
  top: 0;
  right: 0;

  cursor: pointer;

  border: 0;
  background: transparent;
  color: ${({ theme }) => theme['gray-500']};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 24px;
  margin-right: 24px;

  position: absolute;
`
