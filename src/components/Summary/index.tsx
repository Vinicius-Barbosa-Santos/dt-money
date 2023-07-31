// import Styled Components
import { useContext } from 'react'
import * as C from './styles'

// import Phosphor
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { TrasactionsContext } from '../../context/TransactionsContext'
import { priceFormatter } from '../../utils/formatter'

export const Summary = () => {

    const { transactions } = useContext(TrasactionsContext)

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'income') {
            acc.income += transaction.price
            acc.total += transaction.price
        } else {
            acc.outcome += transaction.price
            acc.total -= transaction.price
        }

        return acc
    }, { income: 0, outcome: 0, total: 0 })

    return (
        <C.Container>
            <C.SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color='#00B37E' />
                </header>

                <strong>{priceFormatter.format(summary.income)}</strong>
            </C.SummaryCard>

            <C.SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color='#F75A68' />
                </header>

                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </C.SummaryCard>

            <C.SummaryCard $variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color='#fff' />
                </header>

                <strong>{priceFormatter.format(summary.total)}</strong>
            </C.SummaryCard>
        </C.Container>
    )
}