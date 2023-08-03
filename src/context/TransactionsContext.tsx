import { ReactNode, createContext, useEffect, useState } from "react";

import { TransactionsType } from '../interface/TransactionsType'
import { api } from "../lib/axios";

interface TransactionsTypeProps {
    transactions: TransactionsType[],
    fetchTransactions: (query? : string) => Promise<void>
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

    const fetchTransactions = async (query? : string) => {
        const response = await api.get('transactions', {
            params: {
                q: query
            }
        })

        setTransactions(response.data)            
    }

    return (
        <TrasactionsContext.Provider value={{ transactions, fetchTransactions }}>
            {children}
        </TrasactionsContext.Provider>
    )
}