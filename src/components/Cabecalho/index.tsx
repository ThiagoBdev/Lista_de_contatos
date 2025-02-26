import { useDispatch } from 'react-redux'
import * as S from './styles'
import { useState } from 'react'
import { addContact } from '../../store/reducers/contatos'

interface FormData {
  name: string
  email: string
  number: string
}

const ContactForm = () => {
  const dispatch = useDispatch()

  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    number: ''
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

    dispatch(addContact({ id: Date.now(), ...form }))
    setForm({ name: '', email: '', number: '' })
  }

  return (
    <S.ContainerPrincipal>
      <S.Titulo_Cadastro>Cadastro De Contatos</S.Titulo_Cadastro>
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
          <S.Botao type="submit">Cadastrar</S.Botao>
        </S.Formulario>
      </S.ContainerSecundario>
    </S.ContainerPrincipal>
  )
}

export default ContactForm
