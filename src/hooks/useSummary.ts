// import Context
import { useContext } from 'react'
import { TrasactionsContext } from '../context/TransactionsContext'

export const useSummary = () => {
  const { transactions } = useContext(TrasactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    { income: 0, outcome: 0, total: 0 },
  )

  return summary
}
