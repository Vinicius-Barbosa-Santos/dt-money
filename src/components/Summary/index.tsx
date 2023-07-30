// import Styled Components
import * as C from './styles'

// import Phosphor
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

export const Summary = () => {
    return (
        <C.Container>
            <C.SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color='#00B37E'/>
                </header>

                <strong>R$ 17.400,00</strong>
            </C.SummaryCard>

            <C.SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color='#F75A68'/>
                </header>

                <strong>R$ 17.400,00</strong>
            </C.SummaryCard>
            
            <C.SummaryCard $variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color='#fff'/>
                </header>

                <strong>R$ 17.400,00</strong>
            </C.SummaryCard>
        </C.Container>
    )
}