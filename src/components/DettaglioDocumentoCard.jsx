import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaPen } from 'react-icons/fa';

const DettaglioDocumentoCard = ({ documento }) => {

    // Funzione per determinare se il documento è in scadenza (ad esempio, entro 3 giorni dalla scadenza)
    const isExpiring = () => {

        if ((documento.stato == "IN_ATTESA" || documento.stato == "SCADUTO" || documento.stato == "FIRMATO" || documento.stato == "ANNULLATO")) {
            return false;
        }

        const currentDate = new Date(); // Data di oggi
        const expirationDate = new Date(documento.dataScadenza); // Data di scadenza

        // Imposta entrambi i valori a mezzanotte per ignorare le ore
        currentDate.setHours(0, 0, 0, 0);
        expirationDate.setHours(0, 0, 0, 0);

        // Calcola la differenza in giorni
        const timeDifferenceInDays = (expirationDate - currentDate) / (1000 * 3600 * 24);

        // Verifica se la scadenza è nei prossimi 3 giorni
        return timeDifferenceInDays <= 3 && timeDifferenceInDays > 0;
    };
    return (
        <>
            <Card className="mb-4 custom-card">
                {/* Aggiungi il badge in alto a destra se il documento è in scadenza */}
                {isExpiring() && (
                    <div className="expiring-badge pulse-expire-animation">In scadenza</div>
                )}

                <div className="card-body px-4 py-4">

                    <Card.Subtitle className="mb-2 text-muted py-1">
                        <h5 className="m-a-0 text-uppercase light mt-0 mb-0">Scheda documento</h5>
                    </Card.Subtitle>

                    {documento.stato == "DA_COMPILARE" && <hr className="thin-color-separator border-cc-06" />}
                    {documento.stato == "DA_FIRMARE" && <hr className="thin-color-separator border-cc-01" />}
                    {documento.stato == "IN_ATTESA" && <hr className="thin-color-separator border-cc-05" />}
                    {documento.stato == "SCADUTO" && <hr className="thin-color-separator border-cc-03" />}
                    {documento.stato == "FIRMATO" && <hr className="thin-color-separator border-cc-02" />}
                    {documento.stato == "ANNULLATO" && <hr className="thin-color-separator border-cc-45" />}

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

                    {documento.stato == "DA_COMPILARE" && <Button variant="primary" className="btn-firma">
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
