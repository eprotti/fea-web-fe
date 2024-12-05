import React from 'react';
import { Card, Table } from 'react-bootstrap';
import { separatorDocumento } from '../utils/documentoUtil';

const FirmaDocumentoCard = ({ documento, readonly }) => {

    return (
        <Card className="mb-4 custom-card">

            <div className="card-body px-4 py-4">

                <Card.Subtitle className="mb-2 text-muted py-1">
                    <h5 className="m-a-0 text-uppercase light mt-0 mb-0">
                        {readonly == "false" && "Seleziona "}firme da apporre
                    </h5>
                </Card.Subtitle>

                <hr className={`thin-color-separator pb-2 mt-2 ${separatorDocumento(documento.stato)}`} />

                <Table borderless>
                    <thead >
                        <tr>
                            {readonly == "false" && (<th style={{ paddingLeft: "15px" }} className='col-1'><input type='checkbox' /></th>)}
                            <th className='col-7'>Descrizione</th>
                            <th className='d-none d-md-table-cell col-2 text-center'>Pagina</th>
                            <th className='col-2 text-center' >Obbligatoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documento.firme.map((firma) => (
                            <tr key={firma.id}>
                                {readonly == "false" && (<td style={{ paddingLeft: "15px" }}>
                                    <input type='checkbox' value={firma.id} />
                                </td>)}
                                <td>{firma.titolo}</td>
                                <td className='text-center'>{firma.pagina}</td>
                                <td className='text-center'>{firma.obbligatoria ? "Si" : "No"}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </div>

        </Card >
    );
};

export default FirmaDocumentoCard;
