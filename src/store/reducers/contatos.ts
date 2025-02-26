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
    }
  }
})

export const { addContact } = contactsSlice.actions
export default contactsSlice.reducer
