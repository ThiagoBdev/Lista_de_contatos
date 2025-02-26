import { configureStore } from '@reduxjs/toolkit'
import contatosReducers from './reducers/contatos'

const store = configureStore({
  reducer: {
    contacts: contatosReducers
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
