import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];


const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]))
const transactionSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      state[action.payload.category].push(action.payload)
    },
    deleteTransactions: (state, action) => {
      const id = action.payload.id;
      const category = action.payload.category;
      state[category] = state[category].filter(transaction => transaction.id !== id)
    }
  }
})



export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((a,b) => [...a, ...b], []);

export const { addTransaction, deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;