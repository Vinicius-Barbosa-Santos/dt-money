// import Styled Components
import * as C from './styles'

// import Phosphor
import { MagnifyingGlass } from 'phosphor-react'

// import React Hook Form
import { useForm } from 'react-hook-form'

// import Zod
import * as z from 'zod'

// import ZodResolver
import { zodResolver } from '@hookform/resolvers/zod'
import { TrasactionsContext } from '../../context/TransactionsContext'

// import Context
import { useContext } from 'react'

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export const SearchForm = () => {
    const { fetchTransactions } = useContext(TrasactionsContext)

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    const handleSearchTransactions = async (data: SearchFormInputs) => {
        await fetchTransactions(data.query)
    }

    return (
        <C.Container>
            <C.ContentForm onSubmit={handleSubmit(handleSearchTransactions)}>
                <input
                    type="seach"
                    placeholder='Busque uma transação'
                    {...register('query')}
                />

                <C.ButtonSearch type='submit' disabled={isSubmitting}>
                    <MagnifyingGlass size={20} />
                    <span>Buscar</span>
                </C.ButtonSearch>
            </C.ContentForm>
        </C.Container>
    )
}