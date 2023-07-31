// import Styled Components
import * as C from './styles'

// import Phosphor
import { MagnifyingGlass } from 'phosphor-react'

export const SearchForm = () => {
    return (
        <C.Container>
            <C.ContentForm>
                <form>
                    <input
                        type="seach"
                        placeholder='Busque uma transação'
                    />
                </form>

                <C.ButtonSearch>
                    <MagnifyingGlass size={20} />
                    <span>Buscar</span>
                </C.ButtonSearch>
            </C.ContentForm>
        </C.Container>
    )
}