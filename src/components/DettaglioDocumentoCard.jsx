import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaPen } from 'react-icons/fa';
import { isExpiring, separatorDocumento } from '../utils/documentoUtil';
import StatoDocumento from '../enum/statoDocumento';

const DettaglioDocumentoCard = ({ documento }) => {

    return (
        <>
            <Card className="mb-4 custom-card">
                {/* Aggiungi il badge in alto a destra se il documento è in scadenza */}
                {isExpiring(documento.dataScadenza, documento.stato) && (
                    <div className="expiring-badge pulse-expire-animation">In scadenza</div>
                )}

                <div className="card-body px-4 py-4">

                    <Card.Subtitle className="mb-2 text-muted py-1">
                        <h5 className="m-a-0 text-uppercase light mt-0 mb-0">Scheda documento</h5>
                    </Card.Subtitle>

                    <hr className={`thin-color-separator pb-2 mt-3 ${separatorDocumento(documento.stato)}`} />

                    <div className="row">
                        <div className="col-xs-12 col-md-4">
                            <div className="data-show">
                                <p className="data-text">Stato:</p>
                                <p className="data-value">Da compilare</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="data-show">
                                <p className="data-text">Inserimento:</p>
                                <p className="data-value">19/11/2024</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="data-show">
                                <p className="data-text">Scadenza:</p>
                                <p className="data-value">16/12/2024</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12">
                            <div className="data-show">
                                <p className="data-text">Predisposto da:</p>
                                <p className="data-value">RMIC83100G - IC VIA DELLE ALZAVOLE</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12">
                            <div className="data-show">
                                <p className="data-text">Titolo:</p>
                                <p className="data-value">Titolo documento</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12">
                            <div className="data-show">
                                <p className="data-text">Descrizione:</p>
                                <p className="data-value">Descrizione documento</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <div className="data-show">
                                <p className="data-text">Applicazione richiedente:</p>
                                <p className="data-value">Sigillo Gestione</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <div className="data-show">
                                <p className="data-text">Tipologia documento:</p>
                                <p className="data-value">Non specificata</p>
                            </div>
                        </div>
                    </div>

                </div>

            </Card >

            <Card className="mb-4 custom-card">

                <div className="card-body">

                    {documento.stato == StatoDocumento.DA_COMPILARE && <Button variant="primary" className="btn-firma">
                        Compila documento <FaPen className="ml-2" />
                    </Button>}

                    {documento.stato == "DA_FIRMARE" && <Button variant="primary" className="btn-firma">
                        Firma documento <FaPen className="ml-2" />
                    </Button>}

                </div>

            </Card >
        </>
    );
};

export default DettaglioDocumentoCard;
