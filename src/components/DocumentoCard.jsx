import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaPen, FaFileAlt, FaCalendar, FaChevronRight } from 'react-icons/fa';



const DocumentoCard = ({ titolo, descrizione, dataInserimento, dataScadenza, tipo }) => {

    // Funzione per determinare se il documento è in scadenza (ad esempio, entro 3 giorni dalla scadenza)
    const isExpiring = () => {

        if ((tipo == "IN_ATTESA" || tipo == "SCADUTI" || tipo == "FIRMATI" || tipo == "ANNULLATI")) {
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
    return (
        <Card className="mb-4 custom-card">
            <Card.Body>
                {/* Aggiungi il badge in alto a destra se il documento è in scadenza */}
                {isExpiring() && (
                    <div className="expiring-badge pulse-expire-animation">In scadenza</div>
                )}

                <Card.Subtitle className="mb-2 text-muted p-y-1">
                    <FaCalendar /> Inserito il: {new Date(dataInserimento).toLocaleDateString()} - <FaCalendar /> Scadenza: {new Date(dataScadenza).toLocaleDateString()}
                </Card.Subtitle>
                {tipo == "DA_COMPILARE" && <hr className="thin-color-separator border-cc-06" />}
                {tipo == "DA_FIRMARE" && <hr className="thin-color-separator border-cc-01" />}
                {tipo == "IN_ATTESA" && <hr className="thin-color-separator border-cc-05" />}
                {tipo == "SCADUTI" && <hr className="thin-color-separator border-cc-03" />}
                {tipo == "FIRMATI" && <hr className="thin-color-separator border-cc-02" />}
                {tipo == "ANNULLATI" && <hr className="thin-color-separator border-cc-45" />}
                <Card.Title>{titolo}</Card.Title>
                <Card.Text>{descrizione}</Card.Text>

                {tipo == "DA_COMPILARE" && <Button variant="primary" className="btn-firma">
                    Compila documento <FaPen className="ml-2" />
                </Button>}

                {tipo == "DA_FIRMARE" && <Button variant="primary" className="btn-firma">
                    Firma documento <FaPen className="ml-2" />
                </Button>}

                {(tipo == "IN_ATTESA" || tipo == "SCADUTI" || tipo == "FIRMATI" || tipo == "ANNULLATI") && <Button variant="primary" className="btn-firma">
                    Dettaglio documento <FaFileAlt className="ml-2" />
                </Button>}

                {(tipo != "IN_ATTESA" && tipo != "SCADUTI" && tipo != "FIRMATI" && tipo != "ANNULLATI") &&
                    <div className="text-end mt-3">
                        <a href={"#"} target="_blank" rel="noopener noreferrer" className="mt-3 d-block text-primary">
                            Vedi dettaglio documento <FaChevronRight />
                        </a>
                    </div>}

            </Card.Body>
        </Card>
    );
};

export default DocumentoCard;
