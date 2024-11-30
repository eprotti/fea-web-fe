// src/reducers/documentReducer.js
const initialState = {
    documents: [], // I documenti recuperati
    loading: false, // Stato di caricamento
    error: null, // Messaggio di errore
};

const documentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DOCUMENTS_LOADING':
            return { ...state, loading: true, error: null };
        case 'DOCUMENTS_FETCH_SUCCESS':
            return { ...state, loading: false, documents: action.payload };
        case 'DOCUMENTS_FETCH_ERROR':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default documentReducer;
