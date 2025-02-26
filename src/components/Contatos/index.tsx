import { useDispatch } from 'react-redux'
import { Contact, removeContact } from '../../store/reducers/contatos'
import * as S from './styles'

type ContainerContatosProps = {
  contacts: Contact[]
  setSelectedContact: (contact: Contact | null) => void
}

const Container_Contatos = ({
  contacts = [],
  setSelectedContact
}: ContainerContatosProps) => {
  const dispatch = useDispatch()

  const handleRemove = (id: number) => {
    dispatch(removeContact(id))
  }

  const handleEdit = (contact: Contact) => {
    setSelectedContact(contact)
  }

  return (
    <div>
      {contacts.map((contact) => (
        <S.Container_Card key={contact.id}>
          <S.Sub_titulo>Nome:</S.Sub_titulo>
          <S.Info>{contact.name}</S.Info>
          <S.Sub_titulo>E-mail:</S.Sub_titulo>
          <S.Info>{contact.email}</S.Info>
          <S.Sub_titulo>Numero:</S.Sub_titulo>
          <S.Info>{contact.number}</S.Info>
          <S.Botao_editar onClick={() => handleEdit(contact)}>
            Editar
          </S.Botao_editar>
          <S.Botao_remover onClick={() => handleRemove(contact.id)}>
            Remover
          </S.Botao_remover>
        </S.Container_Card>
      ))}
    </div>
  )
}

export default Container_Contatos
