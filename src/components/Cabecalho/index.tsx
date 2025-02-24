import * as S from './styles'

const Header = () => (
  <>
    <S.ContainerPrincipal>
      <S.Titulo_Cadastro>Cadastro De Contatos</S.Titulo_Cadastro>
      <S.ContainerSecundario>
        <S.Label htmlFor="nome">Nome Completo</S.Label>
        <S.Campos type="text" placeholder="Nome Completo" id="nome" />
        <S.Label htmlFor="email">E-mail</S.Label>
        <S.Campos type="email" placeholder="Email" id="email" />
        <S.Label htmlFor="numero">Numero</S.Label>
        <S.Campos type="text" placeholder="Numero" id="numero" />
        <S.Botao type="submit">Cadastrar</S.Botao>
      </S.ContainerSecundario>
    </S.ContainerPrincipal>
  </>
)

export default Header
