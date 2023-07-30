// import Styled Components
import * as C from './styles'

// import Assets
import logoImg from '../../assets/logo.svg'

export const Header = () => {
    return (
        <C.Container>
            <C.Content>
                <img src={logoImg} alt="Logo DT Money" />

                <C.ButtonTransation type='button'>
                    Nova Transação
                </C.ButtonTransation>
            </C.Content>
        </C.Container>
    )
}