// import Radix
import * as Dialog from '@radix-ui/react-dialog'

// import Styled Components
import * as C from './styles'

// import Phosphor
import { X, ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'

// import React Hook Form
import { Controller, useForm } from 'react-hook-form'

// import Zod
import * as z from 'zod'

// import ZodResolver
import { zodResolver } from '@hookform/resolvers/zod'

// import Context
import { useContext } from 'react'
import { TransactionsContext } from '../../context/TransactionsContext'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export const NewTranslationModal = () => {
  const { createTransaction } = useContext(TransactionsContext)

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  })

  const handleCreateNewTransaction = async (data: NewTransactionFormInputs) => {
    const { description, price, category, type } = data

    await createTransaction({
      description,
      price,
      category,
      type,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <C.Overlay />

      <C.Content>
        <h2>Nova Transação</h2>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <C.TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <C.TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    <span>Entrada</span>
                  </C.TransactionTypeButton>

                  <C.TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    <span>Saída</span>
                  </C.TransactionTypeButton>
                </C.TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>

        <C.Close>
          <X size={24} />
        </C.Close>
      </C.Content>
    </Dialog.Portal>
  )
}
