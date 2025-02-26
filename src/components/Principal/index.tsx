import * as S from './styles'
import Container_Contatos from '../Contatos'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Main = () => {
  const contacts = useSelector((state: RootReducer) => state.contacts)

  return (
    <>
      <S.Titulo_Contatos>Lista de contatos cadastrados:</S.Titulo_Contatos>
      <Container_Contatos contacts={contacts} />
    </>
  )
}

export default Main
