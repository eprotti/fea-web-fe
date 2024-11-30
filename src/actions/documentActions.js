// src/actions/documentActions.js
import { simulateApiCall } from '../services/simulateApiCall.js';

export const fetchDocuments = () => async (dispatch) => {
  try {
    dispatch({ type: 'DOCUMENTS_LOADING' }); // Impostiamo lo stato di caricamento
    const documents = await simulateApiCall(); // Simuliamo la chiamata API
    dispatch({ type: 'DOCUMENTS_FETCH_SUCCESS', payload: documents }); // Successo, inviamo i dati
  } catch (error) {
    dispatch({ type: 'DOCUMENTS_FETCH_ERROR', payload: error }); // In caso di errore, inviamo l'errore
  }
};
