import React from 'react';
import { Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Per il routing (opzionale)
import { FaEye, FaPen } from 'react-icons/fa'; // Icone per Dettaglio e Firma

const ListaDocumentoCard = ({ documents, titolo, tipo }) => {
    return (
        <div className="document-list">
            <Card className="mb-3 custom-card">
                <Card.Title className="px-3 my-0">
                    <h5 className='text-uppercase' style={{ color: "#5a6772" }}>{titolo}</h5>
                    
                    {tipo=="DA_COMPILARE" && <hr className="thin-color-separator border-cc-06" />}
                    {tipo=="DA_FIRMARE" && <hr className="thin-color-separator border-cc-01" />}
                    {tipo=="IN_ATTESA" && <hr className="thin-color-separator border-cc-05" />}
                    {tipo=="SCADUTI" && <hr className="thin-color-separator border-cc-03" />}
                    {tipo=="FIRMATI" && <hr className="thin-color-separator border-cc-02" />}
                    
                </Card.Title>
                <Card.Body className='my-0 pt-0'>
                    {/* Lista di documenti */}
                    <Table borderless>
                        <thead >
                            <tr>
                                <th>Titolo</th>
                                <th className='col-2 text-center'>Data inserimento</th>
                                <th className='col-2 text-center'>Data scadenza</th>
                                <th className='col-2 text-center'>Azioni</th>
                            </tr>
                        </thead>
                        <tbody>
                            {documents.map((document) => (
                                <tr key={document.id}>
                                    <td>{document.title}</td>
                                    <td className='text-center'>{document.dataInserimento}</td>
                                    <td className='text-center'>{document.dataScadenza}</td>
                                    <td className='text-center'>
                                        <Link to={`/dettaglio/${document.id}`}  style={{margin: "5px"}} >
                                            <FaEye size={20} ></FaEye>
                                        </Link>
                                        <Link to={`/firma/${document.id}`} style={{margin: "5px"}} >
                                            <FaPen size={20}></FaPen>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ListaDocumentoCard;
