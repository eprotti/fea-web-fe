import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Dati di esempio
  documents: [
    { id: 1, status: 'DA_COMPILARE', createdAt: '2024-01-15' },
    { id: 2, status: 'DA_FIRMARE', createdAt: '2024-02-01' },
    { id: 3, status: 'FIRMATI', createdAt: '2024-03-20' },
    { id: 4, status: 'SCADUTI', createdAt: '2024-12-05' },
    { id: 5, status: 'IN_ATTESA', createdAt: '2024-11-30' },
    { id: 6, status: 'DA_COMPILARE', createdAt: '2024-04-22' },
    { id: 7, status: 'IN_ATTESA', createdAt: '2024-01-11' },
    { id: 8, status: 'DA_FIRMARE', createdAt: '2024-06-15' },
    { id: 9, status: 'FIRMATI', createdAt: '2024-05-02' },
  ],
};

const documentsSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {
    // Azioni per aggiungere o rimuovere documenti
    addDocument: (state, action) => {
      state.documents.push(action.payload);
    },
    removeDocument: (state, action) => {
      state.documents = state.documents.filter(doc => doc.id !== action.payload);
    },
  },
});

export const { addDocument, removeDocument } = documentsSlice.actions;
export default documentsSlice.reducer;
