import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'; // Importa React-Toastify
import 'react-toastify/dist/ReactToastify.css'; // Importa i CSS di React-Toastify
import { fetchDocuments } from '../actions/documentActions.js';
import { debounce } from 'lodash';

const DocumentListener = () => {
    /* const dispatch = useDispatch();

    // Otteniamo lo stato dal Redux store
    const { hasChanges } = useSelector((state) => state.documents);

    // Mostra la notifica quando `hasChanges` è vero
    useEffect(() => {
        if (hasChanges) {
            toast.info("Alcuni documenti sono stati aggiornati", {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
            });
        }
    }, [hasChanges]);  // Esegui l'effetto ogni volta che `hasChanges` cambia

    useEffect(() => {
        // Creiamo una funzione debounced che esegue il polling
        const debouncedFetchDocuments = debounce(() => {
            dispatch(fetchDocuments());
        }, 3000);  // Imposta il debouncing per 3 secondi (3000 millisecondi)

        // Avvia la funzione debounced
        debouncedFetchDocuments();

        // Pulizia del debounced function al termine del ciclo di vita del componente
        return () => {
            debouncedFetchDocuments.cancel();  // Cancella il debounced quando il componente viene smontato
        };
    }, [dispatch]); // L'array delle dipendenze include solo dispatch, per eseguire il debounced solo una volta

    return null;  // Non renderizzare nulla */
};

export default DocumentListener;
