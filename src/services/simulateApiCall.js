// src/utils/simulateApiCall.js
const getFormattedDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // i mesi partono da 0
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
export const simulateApiCall = () => {

  const today = getFormattedDate();

  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      // Simuliamo una risposta fittizia dell'API
      const data = [
        { codiceDocumento: 1, titolo: "Documento 1", stato: "DA_FIRMARE", dataInserimento: today, dataScadenza: today },
        { codiceDocumento: 2, titolo: "Documento 2", stato: "DA_COMPILARE", dataInserimento: "2024-11-11", dataScadenza: "2024-12-11" },
        { codiceDocumento: 3, titolo: "Documento 3", stato: "FIRMATO", dataInserimento: "2024-11-11", dataScadenza: "2024-12-11" },
        { codiceDocumento: 4, titolo: "Documento 4", stato: "SCADUTO", dataInserimento: "2024-11-11", dataScadenza: "2024-10-11" },
        { codiceDocumento: 5, titolo: "Documento 5", stato: "IN_ATTESA", dataInserimento: "2024-11-11", dataScadenza: "2024-12-11" },
        { codiceDocumento: 6, titolo: "Documento 6", stato: "IN_ATTESA", dataInserimento: "2024-11-11", dataScadenza: "2024-12-11" },
      ];

      // Simuliamo un'errore casuale del 10% di probabilità
      /* const isError = Math.random() < 0.1; */
      const isError=false;

      if (isError) {
        reject('Errore nel recupero dei dati');
      } else {
        resolve(data);
      }

      console.log("simulateApiCall")
    }, 0); // 2 secondi di ritardo per simulare una chiamata asincrona
  });
};
