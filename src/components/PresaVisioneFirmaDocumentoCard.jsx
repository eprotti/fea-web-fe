import React from 'react';
import { Card } from 'react-bootstrap';
import { separatorDocumento } from '../utils/documentoUtil';

const PresaVisioneFirmaDocumentoCard = ({ documento }) => {

    return (
        <Card className="mb-4 custom-card">

            <div className="card-body px-4 py-4">

                <Card.Subtitle className="mb-2 text-muted py-1">
                    <h5 className="m-a-0 text-uppercase light mt-0 mb-0">Presa visione</h5>
                </Card.Subtitle>

                <hr className={`thin-color-separator pb-2 mt-2 ${separatorDocumento(documento.stato)}`} />

                <p style={{ paddingLeft: "15px", fontSize: "1.1rem" }}>
                    <input type="checkbox" style={{ marginRight: "20px" }} name="presavisione" value="y" required="true" />
                    <strong>Dichiaro di aver scaricato il documento e di averne
                        preso visione nella sua interezza</strong>
                </p>
            </div>
        </Card>
    );
};

export default PresaVisioneFirmaDocumentoCard;
