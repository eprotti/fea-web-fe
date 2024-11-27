import { configureStore, createSlice } from '@reduxjs/toolkit';

// Creiamo uno slice per l'utente (user)
const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Guest',
    email: '',
  },
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    resetUser(state) {
      state.name = 'Guest';
      state.email = '';
    },
  },
});

// Creiamo lo store e aggiungiamo il reducer user
const store = configureStore({
  reducer: {
    user: userSlice.reducer,  // Passiamo il reducer di user
  },
});

export const { setUser, resetUser } = userSlice.actions;  // Esportiamo le azioni
export default store;
