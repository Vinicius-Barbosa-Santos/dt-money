// import Radix
import * as Dialog from '@radix-ui/react-dialog'

// import Styled Components
import * as C from './styles'

// import Phosphor
import { X, ArrowCircleUp, ArrowCircleDown, } from 'phosphor-react'

export const NewTranslationModal = () => {
    return (
        <Dialog.Portal>
            <C.Overley />

            <C.Content>
                <h2>Nova Transação</h2>

                <form action=''>
                    <input type="text" placeholder='Descrição' />
                    <input type="number" placeholder='Preço' />
                    <input type="text" placeholder='Categoria' />

                    <C.TransactionType>
                        <C.TransactionTypeButton variant='income' value='income'>
                            <ArrowCircleUp size={24} />
                            <span>Entrada</span>
                        </C.TransactionTypeButton>

                        <C.TransactionTypeButton variant='outcome' value='outcome'>
                            <ArrowCircleDown size={24} />
                            <span>Saída</span>
                        </C.TransactionTypeButton>
                    </C.TransactionType>

                    <button type='submit'>Cadastrar</button>
                </form>

                <C.Close>
                    <X size={24} />
                </C.Close>
            </C.Content>
        </Dialog.Portal>
    )
}