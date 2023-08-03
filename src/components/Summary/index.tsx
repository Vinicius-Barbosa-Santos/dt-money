// import Styled Components
import * as C from './styles'

// import Phosphor
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

// import Utils
import { priceFormatter } from '../../utils/formatter'

// import Hooks
import { useSummary } from '../../hooks/useSummary'

export const Summary = () => {
  const summary = useSummary()

  return (
    <C.Container>
      <C.SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </C.SummaryCard>

      <C.SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </C.SummaryCard>

      <C.SummaryCard $variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </C.SummaryCard>
    </C.Container>
  )
}
