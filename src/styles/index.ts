import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Inter", sans-serif;
    }
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1e3a8a;
`

export default EstiloGlobal
