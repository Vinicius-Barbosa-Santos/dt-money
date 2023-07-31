// import Styled Components
import * as C from './styles'

// import Assets
import logoImg from '../../assets/logo.svg'

// import Radix
import * as Dialog from '@radix-ui/react-dialog'

// import Components
import { NewTranslationModal } from '../NewTransactionModal'

export const Header = () => {
    return (
        <C.Container>
            <C.Content>
                <img src={logoImg} alt="Logo DT Money" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <C.ButtonTransation type='button'>
                            Nova Transação
                        </C.ButtonTransation>
                    </Dialog.Trigger>

                    <NewTranslationModal />
                </Dialog.Root>
            </C.Content>
        </C.Container>
    )
}