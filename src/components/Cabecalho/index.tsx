import { useDispatch } from 'react-redux'
import * as S from './styles'
import { useState, useEffect } from 'react'
import { addContact, Contact, editContact } from '../../store/reducers/contatos'

interface FormData {
  name: string
  email: string
  number: string
}

interface ContactFormProps {
  selectedContact: Contact | null
  setSelectedContact: React.Dispatch<React.SetStateAction<Contact | null>>
}

const ContactForm = ({
  selectedContact,
  setSelectedContact
}: ContactFormProps) => {
  const dispatch = useDispatch()

  const [form, setForm] = useState<FormData>({
    name: selectedContact ? selectedContact.name : '',
    email: selectedContact ? selectedContact.email : '',
    number: selectedContact ? selectedContact.email : ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.number) {
      alert('Preencha todos os dados, por favor')
      return
    }

    if (selectedContact) {
      dispatch(editContact({ ...selectedContact, ...form }))
      setSelectedContact(null)
    } else {
      dispatch(addContact({ id: Date.now(), ...form }))
    }

    setForm({ name: '', email: '', number: '' })
  }

  useEffect(() => {
    if (selectedContact) {
      setForm({
        name: selectedContact.name,
        email: selectedContact.email,
        number: selectedContact.number
      })
    } else {
      setForm({ name: '', email: '', number: '' })
    }
  }, [selectedContact])

  return (
    <S.ContainerPrincipal>
      <S.Titulo_Cadastro>
        {selectedContact ? 'Editar Contato' : 'Cadastro de Contato'}
      </S.Titulo_Cadastro>
      <S.ContainerSecundario>
        <S.Formulario onSubmit={handleSubmit}>
          <S.Label htmlFor="nome">Nome Completo</S.Label>
          <S.Campos
            type="text"
            name="name"
            placeholder="Nome Completo"
            value={form.name}
            onChange={handleChange}
          />
          <S.Label htmlFor="email">E-mail</S.Label>
          <S.Campos
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <S.Label htmlFor="numero">Número</S.Label>
          <S.Campos
            type="tel"
            name="number"
            placeholder="Número"
            value={form.number}
            onChange={handleChange}
          />
          <S.Botao type="submit">
            {selectedContact ? 'Editar Contato' : 'Cadastro de Contato'}
          </S.Botao>
        </S.Formulario>
      </S.ContainerSecundario>
    </S.ContainerPrincipal>
  )
}

export default ContactForm
