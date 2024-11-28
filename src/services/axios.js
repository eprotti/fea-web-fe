import axios from 'axios';
import { toast } from 'react-toastify';  // Importa la libreria per le notifiche

// Crea un'istanza di Axios
const instance = axios.create({
  baseURL: 'https://api.example.com',  // Cambia con la tua URL base
  timeout: 10000,  // Timeout della richiesta
  headers: {
    'Content-Type': 'application/json',
  },
});

// Aggiungi un interceptor per gestire gli errori globali
instance.interceptors.response.use(
  (response) => response,  // Se la risposta è positiva, passala
  (error) => {
    // In caso di errore, invia una notifica con react-toastify
    const errorMessage = error.response?.data?.message || error.message || 'Si è verificato un errore';
    
    // Mostra la notifica di errore
    toast.error(`Errore: ${errorMessage}`, {
      /* position: toast.POSITION.TOP_RIGHT, */
      autoClose: 5000,  // La notifica rimarrà visibile per 5 secondi
    });

    // Restituisci l'errore per gestirlo altrove, se necessario
    return Promise.reject(error);
  }
);

export default instance;
