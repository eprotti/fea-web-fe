import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../services/axios';  // Usa l'istanza Axios configurata
import { toast } from 'react-toastify';  // Importa react-toastify per notifiche

// Crea l'azione asincrona per ottenere i dati
export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get('/data', { params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    handleLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    handleError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      
      // Invia la notifica tramite toast
      toast.error(`Errore: ${action.payload}`, {
        /* position: toast.POSITION.TOP_RIGHT, */
        autoClose: 5000,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // Aggiungi qui la gestione dell'errore (già fatto nella handleError)
      });
  },
});

export const { handleLoading, handleError } = dataSlice.actions;  // Azioni Redux
export default dataSlice.reducer;
