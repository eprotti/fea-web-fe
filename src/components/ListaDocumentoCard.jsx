import React, { useEffect } from 'react';
import { Card, Table, ProgressBar } from 'react-bootstrap';
import { FaEye, FaPen } from 'react-icons/fa'; // Icone per Dettaglio e Firma
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Per il routing (opzionale)
import { fetchDocuments } from '../actions/documentActions.js'; // Azione per caricare i documenti

const ListaDocumentoCard = ({ titolo, tipo }) => {

    const dispatch = useDispatch();

    // Otteniamo lo stato dal Redux store
    const { documents, loading, error } = useSelector((state) => state.documents);

    // Effettua la chiamata per recuperare i documenti quando il componente è montato
    useEffect(() => {
        dispatch(fetchDocuments()); // Dispatciamo l'azione per ottenere i documenti
    }, [dispatch]);

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
                        {tipo == "SCADUTI" && <hr className="thin-color-separator border-cc-03" />}
                        {tipo == "FIRMATI" && <hr className="thin-color-separator border-cc-02" />}

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
        return <div className="alert alert-danger">{error}</div>;
    }

    return (
        <div className="document-list">
            <Card className="mb-3 custom-card">
                <Card.Title className="px-3 my-0">
                    <h5 className='text-uppercase' style={{ color: "#5a6772" }}>{titolo}</h5>

                    {tipo == "DA_COMPILARE" && <hr className="thin-color-separator border-cc-06" />}
                    {tipo == "DA_FIRMARE" && <hr className="thin-color-separator border-cc-01" />}
                    {tipo == "IN_ATTESA" && <hr className="thin-color-separator border-cc-05" />}
                    {tipo == "SCADUTI" && <hr className="thin-color-separator border-cc-03" />}
                    {tipo == "FIRMATI" && <hr className="thin-color-separator border-cc-02" />}

                </Card.Title>
                <Card.Body className='my-0 pt-0'>
                    {Array.isArray(documents) && documents.length > 0 ? (

                        <Table borderless>
                            <thead >
                                <tr>
                                    <th>Titolo</th>
                                    <th className='col-2 text-center'>Data inserimento</th>
                                    <th className='d-none d-md-table-cell col-2 text-center'>Data scadenza</th>
                                    <th className='col-2 text-center'>Azioni</th>
                                </tr>
                            </thead>
                            <tbody>
                                {documents.map((document) => (
                                    <tr key={document.id}>
                                        <td>{document.title}</td>
                                        <td className='text-center'>{document.dataInserimento}</td>
                                        <td className='d-none d-md-table-cell text-center'>{document.dataScadenza}</td>
                                        <td className='text-center'>
                                            <Link to={`/dettaglio/${document.id}`} style={{ margin: "5px" }} >
                                                <FaEye size={20} ></FaEye>
                                            </Link>
                                            <Link to={`/firma/${document.id}`} style={{ margin: "5px" }} >
                                                <FaPen size={20}></FaPen>
                                            </Link>
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
        </div>
    );
};

export default ListaDocumentoCard;
