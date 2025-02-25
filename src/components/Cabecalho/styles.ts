import styled from 'styled-components'

export const ContainerPrincipal = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: rgb(122, 135, 172);
  padding: 20px;
`

export const ContainerSecundario = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const Titulo_Cadastro = styled.h1`
  font-size: 48px;
  color: #fff;
  margin-bottom: 16px;
`
export const Label = styled.label`
  display: block;
  color: #fff;
  font-size: 24px;
`

export const Campos = styled.input`
  display: block;
  padding: 20px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
`
export const Botao = styled.button`
  padding: 20px;
  background-color: rgb(34, 158, 94);
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 10px;
  font-size: 16px;

  &:hover {
    background-color: rgb(28, 130, 45);
  }
`
