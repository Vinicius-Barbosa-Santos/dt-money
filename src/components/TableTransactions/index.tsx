// import Styled Components
import { CalendarBlank, TagSimple } from 'phosphor-react'
import * as C from './styles'

export const TableTransactions = () => {
    return (
        <div>
            <C.Container>
                <C.TransactionsTable>
                    <tbody>
                        <tr>
                            <td width='50%'>Desenvolvimento do site</td>
                            <td>
                                <C.PriceHighlight variant='income'>
                                    R$ 12.000,00
                                </C.PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>

                        <tr>
                            <td width='50%'>Hamburguer</td>
                            <td>
                                <C.PriceHighlight variant='outcome'>
                                    R$ -59.00,00
                                </C.PriceHighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>10/04/2022</td>
                        </tr>
                    </tbody>
                </C.TransactionsTable>

                <C.TransactionCardList>
                    <C.CardTransaction>
                        <header>
                            <span>Desenvolvimento do site</span>
                            <C.PriceHighlight variant='income'>
                                R$ 12.000,00
                            </C.PriceHighlight>
                        </header>
                        <footer>
                            <div>
                                <TagSimple size={16} />
                                Venda
                            </div>
                            <div>
                                <CalendarBlank size={16} />
                                10/04/2022
                            </div>
                        </footer>
                    </C.CardTransaction>
                </C.TransactionCardList>

                <C.TransactionCardList>
                    <C.CardTransaction>
                        <header>
                            <span>Hamburguer</span>
                            <C.PriceHighlight variant='outcome'>
                                R$ -59.00,00
                            </C.PriceHighlight>
                        </header>
                        <footer>
                            <div>
                                <TagSimple size={16} />
                                Alimentação
                            </div>
                            <div>
                                <CalendarBlank size={16} />
                                10/04/2022
                            </div>
                        </footer>
                    </C.CardTransaction>
                </C.TransactionCardList>
            </C.Container>
        </div>
    )
}