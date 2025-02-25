import styled from 'styled-components'

export const Container_Card = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  align-items: center;
  background-color: #555555;
  width: 1500px;
  height: 200px;
  border: 1px solid #fff;
  margin-top: 16px;
`
export const Sub_titulo = styled.p`
  margin-right: 8px;
  font-weight: bolder;
  font-size: 24px;
  color: rgb(17, 21, 42);
`
export const Info = styled.span`
  font-weight: bolder;
  font-size: 24px;
  margin-right: 32px;
  color: #bbdefb;
`
export const Botao_editar = styled.button`
  position: absolute;
  right: 210px;
  bottom: center;
  padding: 20px;
  background-color: rgb(196, 143, 45);
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #000;
  cursor: pointer;

  &:hover {
    background-color: rgb(135, 98, 31);
  }
`
export const Botao_remover = styled.button`
  position: absolute;
  right: 100px;
  bottom: center;
  padding: 20px;
  font-size: 16px;
  background-color: rgb(196, 53, 45);
  border-radius: 10px;
  border: 1px solid #000;
  cursor: pointer;

  &:hover {
    background-color: rgb(161, 45, 38);
  }
`
