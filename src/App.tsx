import { Provider } from 'react-redux'
import ListadeContato from './container/ListadeContato'
import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <ListadeContato />
      </Container>
    </Provider>
  )
}

export default App
