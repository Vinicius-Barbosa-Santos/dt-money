import { ReactNode, createContext, useEffect, useState } from 'react'

// import Axios
import { api } from '../lib/axios'

// import Interface
import { TransactionsType } from '../interface/TransactionsType'

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionsTypeProps {
  transactions: TransactionsType[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const TrasactionsContext = createContext({} as TransactionsTypeProps)

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionsType[]>([])

  useEffect(() => {
    fetchTransactions()
  }, [])

  const fetchTransactions = async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  const createTransaction = async (data: CreateTransactionInput) => {
    const { description, price, category, type } = data

    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions((state) => [...state, response.data])
  }

  return (
    <TrasactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TrasactionsContext.Provider>
  )
}
