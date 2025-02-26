import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Contact = {
  id: number
  name: string
  email: string
  number: string
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [] as Contact[],
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.push(action.payload)
    },
    removeContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload.id)
    }
  }
})

export const { addContact, removeContact } = contactsSlice.actions
export default contactsSlice.reducer
