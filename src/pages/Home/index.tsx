// import Components
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from '../../components/SearchForm'
import { TableTransactions } from '../../components/TableTransactions'

const Home = () => {
  return (
    <>
      <Header />
      <Summary />
      <SearchForm />

      <TableTransactions />
    </>
  )
}

export default Home
