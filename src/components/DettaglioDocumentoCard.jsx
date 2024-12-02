import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaPen } from 'react-icons/fa';

const DettaglioDocumentoCard = ({ documento }) => {

    // Funzione per determinare se il documento è in scadenza (ad esempio, entro 3 giorni dalla scadenza)
    const isExpiring = () => {

        if ((documento.status == "IN_ATTESA" || documento.status == "SCADUTI" || documento.status == "FIRMATI" || documento.status == "ANNULLATI")) {
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
        <Card className="mb-4 custom-card">
            <Card.Body>
                {/* Aggiungi il badge in alto a destra se il documento è in scadenza */}
                {isExpiring() && (
                    <div className="expiring-badge pulse-expire-animation">In scadenza</div>
                )}

                <Card.Subtitle className="mb-2 text-muted p-y-1">
                    <h5 class="m-a-0 text-uppercase light">Scheda documento</h5>
                </Card.Subtitle>
                {documento.status == "DA_COMPILARE" && <hr className="thin-color-separator border-cc-06" />}
                {documento.status == "DA_FIRMARE" && <hr className="thin-color-separator border-cc-01" />}
                {documento.status == "IN_ATTESA" && <hr className="thin-color-separator border-cc-05" />}
                {documento.status == "SCADUTI" && <hr className="thin-color-separator border-cc-03" />}
                {documento.status == "FIRMATI" && <hr className="thin-color-separator border-cc-02" />}
                {documento.status == "ANNULLATI" && <hr className="thin-color-separator border-cc-45" />}



                {documento.status == "DA_COMPILARE" && <Button variant="primary" className="btn-firma">
                    Compila documento <FaPen className="ml-2" />
                </Button>}

                {documento.status == "DA_FIRMARE" && <Button variant="primary" className="btn-firma">
                    Firma documento <FaPen className="ml-2" />
                </Button>}

            </Card.Body>
        </Card>
    );
};

export default DettaglioDocumentoCard;
