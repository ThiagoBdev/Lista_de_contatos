import ContactForm from '../../components/Cabecalho'
import Main from '../../components/Principal'
import { useState } from 'react'
import { Contact } from '../../store/reducers/contatos'

const ListadeContato = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

  return (
    <>
      <ContactForm
        selectedContact={selectedContact}
        setSelectedContact={setSelectedContact}
      />
      <Main setSelectedContact={setSelectedContact} />
    </>
  )
}

export default ListadeContato
