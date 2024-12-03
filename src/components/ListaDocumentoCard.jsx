import React from 'react';
import { Card, ProgressBar, Table } from 'react-bootstrap';
import { FaEye, FaPen } from 'react-icons/fa'; // Icone per Dettaglio e Firma
import { useDispatch, useSelector } from 'react-redux';
import { addNotification } from '../actions/notificationActions';
import { useNavigate } from 'react-router-dom';

const ListaDocumentoCard = ({ titolo, tipo }) => {

    const dispatch = useDispatch();

    // Otteniamo lo stato dal Redux store
    const { documents, loading, error } = useSelector((state) => state.documents);

    const statusesToFilter = [tipo];
    const filteredDocuments = documents.filter(doc => statusesToFilter.includes(doc.stato));

    const navigate = useNavigate();

    const handleViewDocument = (codiceDocumento) => {
        // Naviga verso la rotta del dettaglio documento
        { tipo == "DA_COMPILARE" && navigate(`documenti-da-compilare/dettaglio-documento/${codiceDocumento}`); }
        { tipo == "DA_FIRMARE" && navigate(`documenti-da-firmare/dettaglio-documento/${codiceDocumento}`); }
        { tipo == "IN_ATTESA" && navigate(`documenti-in-attesa/dettaglio-documento/${codiceDocumento}`); }
        { tipo == "SCADUTO" && navigate(`documenti-scaduti/dettaglio-documento/${codiceDocumento}`); }
        { tipo == "FIRMATO" && navigate(`documenti-annullati/dettaglio-documento/${codiceDocumento}`); }
    };

    const handleSignDocument = (codiceDocumento) => {
        // Naviga verso la rotta del dettaglio documento
        navigate(`firma-documento/${codiceDocumento}`);
    };

    // Funzione per determinare se il documento è in scadenza (ad esempio, entro 3 giorni dalla scadenza)
    const isExpiring = (dataScadenza) => {

        if ((tipo == "IN_ATTESA" || tipo == "SCADUTO" || tipo == "FIRMATO" || tipo == "ANNULLATO")) {
            return false;
        }

        const currentDate = new Date(); // Data di oggi
        const expirationDate = new Date(dataScadenza); // Data di scadenza

        // Imposta entrambi i valori a mezzanotte per ignorare le ore
        currentDate.setHours(0, 0, 0, 0);
        expirationDate.setHours(0, 0, 0, 0);

        // Calcola la differenza in giorni
        const timeDifferenceInDays = (expirationDate - currentDate) / (1000 * 3600 * 24);

        // Verifica se la scadenza è nei prossimi 3 giorni
        return timeDifferenceInDays <= 3 && timeDifferenceInDays > 0;
    };

    // Se i dati sono in caricamento, mostriamo lo spinner
    if (loading) {
        return (
            <div className="document-list">
                <Card className="mb-3 custom-card">
                    <Card.Title className="px-3 my-0">
                        <h5 className='text-uppercase' style={{ color: "#5a6772" }}>{titolo}</h5>

                        {tipo == "DA_COMPILARE" && <hr className="thin-color-separator border-cc-06" />}
                        {tipo == "DA_FIRMARE" && <hr className="thin-color-separator border-cc-01" />}
                        {tipo == "IN_ATTESA" && <hr className="thin-color-separator border-cc-05" />}
                        {tipo == "SCADUTO" && <hr className="thin-color-separator border-cc-03" />}
                        {tipo == "FIRMATO" && <hr className="thin-color-separator border-cc-02" />}

                    </Card.Title>
                    <Card.Body className='my-0 pt-0'>
                        <div className="d-flex justify-content-center align-items-center" >
                            <div style={{ width: '80%', padding: '20px' }}>
                                <ProgressBar animated now={60} label="Caricamento..." />
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div >
        );
    }

    // Se c'è un errore, mostriamo un messaggio
    if (error) {
        dispatch(addNotification("Si è verificato un errore: " + error, "error"));
    }

    // Funzione per abbreviare il titolo se supera i 40 caratteri
    const truncateTitle = (title, maxLength = 40) => {
        return title.length > maxLength ? title.slice(0, maxLength) + '...' : title;
    };

    return (
        <div className="document-list">
            <Card className="mb-3 custom-card">
                <Card.Title className="px-3 my-0">
                    <h5 className='text-uppercase' style={{ color: "#5a6772" }}>{titolo}</h5>

                    {tipo == "DA_COMPILARE" && <hr className="thin-color-separator border-cc-06" />}
                    {tipo == "DA_FIRMARE" && <hr className="thin-color-separator border-cc-01" />}
                    {tipo == "IN_ATTESA" && <hr className="thin-color-separator border-cc-05" />}
                    {tipo == "SCADUTO" && <hr className="thin-color-separator border-cc-03" />}
                    {tipo == "FIRMATO" && <hr className="thin-color-separator border-cc-02" />}

                </Card.Title>
                <Card.Body className='my-0 pt-0'>
                    {Array.isArray(filteredDocuments) && filteredDocuments.length > 0 ? (

                        <Table borderless>
                            <thead >
                                <tr>
                                    <th>Titolo</th>
                                    <th className='col-2 text-center'>Data inserimento</th>
                                    <th className='d-none d-md-table-cell col-2 text-center'>Data scadenza</th>
                                    <th className='col-2 text-center' >Azioni</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredDocuments.map((document) => (
                                    <tr key={document.codiceDocumento}>
                                        <td style={{ whiteSpace: "nowrap" }}>
                                            <span style={{ whiteSpace: "wrap" }} className={isExpiring(document.dataScadenza) && ("expiring-badge-list")}>
                                                {truncateTitle(document.titolo)}
                                            </span>
                                        </td>
                                        <td className='text-center'>{document.dataInserimento}</td>
                                        <td className='d-none d-md-table-cell text-center'>{document.dataScadenza}</td>
                                        <td className='text-center' style={{ whiteSpace: "nowrap" }}>
                                            <a onClick={() => handleViewDocument(document.codiceDocumento)} rel="noopener noreferrer" style={{ marginRight: "10px", cursor: "pointer" }}>
                                                <FaEye size={20} ></FaEye>
                                            </a>
                                            <a onClick={() => handleSignDocument(document.codiceDocumento)} rel="noopener noreferrer" style={{ marginRight: "10px", cursor: "pointer" }}>
                                                <FaPen size={20}></FaPen>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    ) : (
                        <p className="text-center">Nessun documento trovato</p>
                    )}
                </Card.Body>
            </Card>
        </div >
    );
};

export default ListaDocumentoCard;
