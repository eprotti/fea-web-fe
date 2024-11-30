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
        { id: 1, title: "Documento 1", status: "DA_FIRMARE", dataInserimento: today, dataScadenza: today },
        { id: 2, title: "Documento 2", status: "DA_COMPILARE", dataInserimento: "2024-11-11", dataScadenza: "2024-12-11" },
        { id: 3, title: "Documento 3", status: "FIRMATO", dataInserimento: "2024-11-11", dataScadenza: "2024-12-11" },
        { id: 4, title: "Documento 4", status: "SCADUTO", dataInserimento: "2024-11-11", dataScadenza: "2024-10-11" },
        { id: 5, title: "Documento 5", status: "IN_ATTESA", dataInserimento: "2024-11-11", dataScadenza: "2024-12-11" },
      ];

      // Simuliamo un'errore casuale del 10% di probabilità
      //const isError = Math.random() < 0.1;

      /* if (isError) {
        reject('Errore nel recupero dei dati');
      } else { */
      resolve(data);
      /* } */
    }, 2000); // 2 secondi di ritardo per simulare una chiamata asincrona
  });
};
