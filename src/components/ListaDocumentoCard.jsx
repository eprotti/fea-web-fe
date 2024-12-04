import React from 'react';
import { Card, ProgressBar, Table } from 'react-bootstrap';
import { FaEye, FaPen } from 'react-icons/fa'; // Icone per Dettaglio e Firma
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNotification } from '../actions/notificationActions';
import StatoDocumento from '../enum/statoDocumento';
import { isExpiring, separatorDocumento, truncateTitle } from '../utils/documentoUtil';
import { handleViewListDocument } from '../utils/navigationUtil';

const ListaDocumentoCard = ({ titolo, stato }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Otteniamo lo stato dal Redux store
    const { documents, loading, error } = useSelector((state) => state.documents);
    const statusesToFilter = [stato];
    const filteredDocuments = documents.filter(doc => statusesToFilter.includes(doc.stato));

    const cardTitle = (titolo, stato) => {
        return <Card.Title className="px-3 my-0">
            <h5 className='text-uppercase' style={{ color: "#5a6772" }}>{titolo}</h5>

            <hr className={`thin-color-separator pb-2 mt-3 ${separatorDocumento(stato)}`} />

        </Card.Title>
    };

    // Se i dati sono in caricamento, mostriamo lo spinner
    if (loading) {
        return (
            <div className="document-list">
                <Card className="mb-3 custom-card">
                    {cardTitle(titolo, stato)}
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

    return (
        <div className="document-list">
            <Card className="mb-3 custom-card">
                {cardTitle(titolo, stato)}
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
                                            <span style={{ whiteSpace: "wrap" }} className={isExpiring(document.dataScadenza, document.stato) && ("expiring-badge-list")}>
                                                {truncateTitle(document.titolo)}
                                            </span>
                                        </td>
                                        <td className='text-center'>{document.dataInserimento}</td>
                                        <td className='d-none d-md-table-cell text-center'>{document.dataScadenza}</td>
                                        <td className='text-center' style={{ whiteSpace: "nowrap" }}>
                                            <a onClick={() => handleViewListDocument(navigate, document.stato, document.codiceDocumento)} rel="noopener noreferrer" style={{ marginRight: "10px", cursor: "pointer" }}>
                                                <FaEye size={20} ></FaEye>
                                            </a>
                                            <a onClick={() => handleViewListDocument(navigate, document.stato, document.codiceDocumento)} rel="noopener noreferrer" style={{ marginRight: "10px", cursor: "pointer" }}>
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
