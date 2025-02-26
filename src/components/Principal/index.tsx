import * as S from './styles'
import { useSelector } from 'react-redux'
import Container_Contatos from '../Contatos'
import { Contact } from '../../store/reducers/contatos'
import { RootReducer } from '../../store'

type MainProps = {
  setSelectedContact: React.Dispatch<React.SetStateAction<Contact | null>>
}

const Main = ({ setSelectedContact }: MainProps) => {
  const contacts = useSelector((state: RootReducer) => state.contacts) || []

  return (
    <>
      <S.Titulo_Contatos>Lista de contatos cadastrados:</S.Titulo_Contatos>
      <Container_Contatos
        contacts={contacts}
        setSelectedContact={setSelectedContact}
      />
    </>
  )
}

export default Main
