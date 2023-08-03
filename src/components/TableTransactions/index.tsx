// import Styled Components
import * as C from './styles'

// import Phosphor
import { CalendarBlank, TagSimple } from 'phosphor-react'

// import Context
import { useContext } from 'react'
import { TrasactionsContext } from '../../context/TransactionsContext'

// import utils
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export const TableTransactions = () => {
  const { transactions } = useContext(TrasactionsContext)

  return (
    <div>
      <C.Container>
        <C.TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <C.PriceHighlight $variant={transaction.type}>
                    {transaction.type === 'outcome' ? '- ' : ''}
                    {priceFormatter.format(transaction.price)}
                  </C.PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </C.TransactionsTable>

        <C.TransactionCardList>
          {transactions.map((transaction) => (
            <C.CardTransaction key={transaction.id}>
              <header>
                <span>{transaction.description}</span>
                <C.PriceHighlight $variant={transaction.type}>
                  {transaction.price}
                </C.PriceHighlight>
              </header>
              <footer>
                <div>
                  <TagSimple size={16} />
                  {transaction.category}
                </div>
                <div>
                  <CalendarBlank size={16} />
                  {dateFormatter.format(new Date(transaction.createdAt))}
                </div>
              </footer>
            </C.CardTransaction>
          ))}
        </C.TransactionCardList>
      </C.Container>
    </div>
  )
}
