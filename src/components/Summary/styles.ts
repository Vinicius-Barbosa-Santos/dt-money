import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1120px;

  gap: 2rem;
  display: grid;
  margin-top: -5.12rem;
  grid-template-columns: repeat(3, 1fr);
  overflow: auto;

  @media (max-width: 1200px) {
    padding: 0rem 1.25rem;
  }

  @media (max-width: 769px) {
    gap: 1.5rem;
  }
`

interface SummaryCardProps {
  $variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  height: 137px;
  white-space: nowrap;
  padding: 1.5rem 1.5rem 1.5rem 2rem;

  border-radius: 6px;

  background-color: ${({ theme }) => theme['gray-600']};

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${({ theme }) => theme['gray-300']};
    }
  }

  > strong {
    font-size: 2rem;
    margin-top: 1.125rem;
    display: inline-block;

    color: ${({ theme }) => theme['gray-100']};
  }

  ${($props) =>
    $props.$variant === 'green' &&
    css`
      background: ${({ theme }) => theme['green-700']};
    `}
`
