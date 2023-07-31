import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    @media(max-width: 1200px) {
        padding: 0rem 1.25rem;
    }
`

export const TransactionsTable = styled.table`
    width: 100%;
    margin-top: 1.5rem;
    
    border-spacing: 0 0.5rem;
    border-collapse: separate;

    td {
        margin: 1.5rem auto;
        padding: 1.25rem 2rem;

        background-color: ${({ theme }) => theme['gray-700']};

        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }

    @media(max-width: 769px) {
        display: none;
    }
`

interface PriceHighlightProps {
    $variant: 'income' | 'outcome';
}


export const PriceHighlight = styled.span<PriceHighlightProps>`
    color : ${($props) => $props.$variant === 'income' ? $props.theme['green-300'] : $props.theme['red-300']};

    @media (max-width: 769px) {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 2.0rem;
    }
`

export const TransactionCardList = styled.div`
  display: none;

  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 0.75rem;
  }
`

export const CardTransaction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.25rem;
  gap: 0.75rem;
  width: 100%;
  background: ${(props) => props.theme['gray-700']};
  border-radius: 6px;

  header {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    color: ${(props) => props.theme['gray-300']};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    color: ${(props) => props.theme['gray-500']};

    div {
      display: flex;
      align-items: center;
      gap: 0.28rem;
    }
  }
`