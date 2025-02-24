import ListadeContato from './container/ListadeContato'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <div className="app">
      <EstiloGlobal />
      <Container>
        <ListadeContato />
      </Container>
    </div>
  )
}

export default App
