import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaCalendar, FaChevronRight, FaFileAlt, FaPen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DocumentoCard = ({ codiceDocumento, titolo, descrizione, dataInserimento, dataScadenza, tipo }) => {

    const navigate = useNavigate();

    const handleViewDocument = (codiceDocumento) => {
        // Naviga verso la rotta del dettaglio documento
        navigate(`dettaglio-documento/${codiceDocumento}`);
    };

    const handleSignDocument = (codiceDocumento) => {
        // Naviga verso la rotta del dettaglio documento
        navigate(`firma-documento/${codiceDocumento}`);
    };

    // Funzione per determinare se il documento è in scadenza (ad esempio, entro 3 giorni dalla scadenza)
    const isExpiring = () => {

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
    return (
        <Card className="mb-4 custom-card">
            <Card.Body>
                {/* Aggiungi il badge in alto a destra se il documento è in scadenza */}
                {isExpiring() && (
                    <div className="expiring-badge pulse-expire-animation">In scadenza</div>
                )}

                <Card.Subtitle className="mb-2 text-muted p-y-1">
                    <span style={{whiteSpace: "nowrap", marginRight: '10px'}}><FaCalendar /> Inserito il: {new Date(dataInserimento).toLocaleDateString()}</span> <span style={{whiteSpace: "nowrap"}}><FaCalendar /> Scadenza: {new Date(dataScadenza).toLocaleDateString()}</span>
                </Card.Subtitle>
                {tipo == "DA_COMPILARE" && <hr className="thin-color-separator border-cc-06" />}
                {tipo == "DA_FIRMARE" && <hr className="thin-color-separator border-cc-01" />}
                {tipo == "IN_ATTESA" && <hr className="thin-color-separator border-cc-05" />}
                {tipo == "SCADUTO" && <hr className="thin-color-separator border-cc-03" />}
                {tipo == "FIRMATO" && <hr className="thin-color-separator border-cc-02" />}
                {tipo == "ANNULLATO" && <hr className="thin-color-separator border-cc-45" />}
                <Card.Title>{titolo}</Card.Title>
                <Card.Text>{descrizione}</Card.Text>

                {tipo == "DA_COMPILARE" &&
                    <Button variant="primary" className="btn-firma">
                        Compila documento <FaPen className="ml-2" />
                    </Button>}

                {tipo == "DA_FIRMARE" &&
                    <Button variant="primary" className="btn-firma">
                        Firma documento <FaPen className="ml-2" />
                    </Button>}

                {(tipo == "IN_ATTESA" || tipo == "SCADUTO" || tipo == "FIRMATO" || tipo == "ANNULLATO") &&
                    <Button onClick={() => handleViewDocument(codiceDocumento)} variant="primary" className="btn-firma">
                        Dettaglio documento <FaFileAlt className="ml-2" />
                    </Button>}

                {(tipo != "IN_ATTESA" && tipo != "SCADUTO" && tipo != "FIRMATO" && tipo != "ANNULLATO") &&
                    <div className="text-end mt-3">
                        <a onClick={() => handleViewDocument(codiceDocumento)} rel="noopener noreferrer" style={{cursor: "pointer"}} className="mt-3 d-block text-primary">
                            Vedi dettaglio documento <FaChevronRight />
                        </a>
                    </div>}

            </Card.Body>
        </Card>
    );
};

export default DocumentoCard;
