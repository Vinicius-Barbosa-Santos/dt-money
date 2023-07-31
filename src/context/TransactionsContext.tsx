import { ReactNode, createContext, useEffect, useState } from "react";

import { TransactionsType } from '../interface/TransactionsType'

interface TransactionsTypeProps {
    transactions: TransactionsType[],
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

    const fetchTransactions = async () => {
        try {
            const response = await fetch('http://localhost:3500/transactions')
            if (!response.ok) throw Error('Erro de Requisição')
            const data = await response.json()

            setTransactions(data)
        } catch (e: any) {
            console.error(e.message)
        }
    }

    return (
        <TrasactionsContext.Provider value={{ transactions }}>
            {children}
        </TrasactionsContext.Provider>
    )
}