import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNotification } from '../actions/NotificationActions.js';
import { separatorDocumento } from '../utils/DocumentoUtil';

const SpidButtonCard = ({ documento }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Stato per gestire l'apertura/chiusura del dropdown
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Lista degli identity provider (esempio statico)
    const identityProviders = [
        {"nome":"Infocert ID", "codice":"infocertid"},
        {"nome":"Poste ID", "codice":"posteid"},
        {"nome":"Sielte ID", "codice":"sielteid"},
        {"nome":"Tim ID", "codice":"timid"},
    ];

    // Funzione per togglare il dropdown
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    // Funzione per gestire la selezione di un provider
    const handleProviderSelect = (provider) => {
        let message = `IdProvider=${provider.codice}, NomeProvider=${provider.nome}, CodiceDocumento=${documento.codiceDocumento}, Titolo=${documento.titolo}, DataFirma=${documento.dataFirma}`;
        setIsDropdownOpen(false); // Chiudi il dropdown dopo la selezione
        handleSignDocumentSuccess(message);
    };

    // Funzione per gestire l'esito positivo della firma
    const handleSignDocumentSuccess = (message) => {
        dispatch(addNotification(`Il documento ${documento.titolo} è stato correttamente firmato! ` + message, "success"));  // Aggiungi la notifica allo stato Redux
        navigate(`/archivio-documenti/firmati/dettaglio-documento/${documento.codiceDocumento}`);
    };

    // Funzione per gestire l'esito negativo della firma
    const handleSignDocumentFailure = (error) => {
        dispatch(addNotification("Non è stato possibile firmare il documento: " + error, "error"));  // Aggiungi la notifica allo stato Redux
        navigate(`/archivio-documenti/firmati/dettaglio-documento/${documento.codiceDocumento}`);
    };

    return (
        <Card className="shadow mb-4 custom-card">

            <div className="card-body px-4 py-4">

                <Card.Subtitle className="mb-2 text-muted py-1">
                    <h5 className="ma-0 text-uppercase light mt-0 mb-0">Seleziona il servizio per firmare il documento</h5>
                </Card.Subtitle>

                <hr className={`thin-color-separator pb-2 mt-2 ${separatorDocumento(documento.stato)}`} />

                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <button className="spid-button" onClick={toggleDropdown}>
                            <img src="/img/spid-ico-circle-bb.svg" alt="SPID" className="spid-logo" />
                            Accedi con SPID
                        </button>
                        {isDropdownOpen && (
                            <div className="spid-dropdown-menu">
                                {identityProviders.map((provider, index) => (
                                    <button
                                        key={index}
                                        className="spid-dropdown-item"
                                        onClick={() => handleProviderSelect(provider)}
                                    >
                                        <img src={`/img/spid-idp-${provider.codice}.svg`} alt={provider.nome} style={{height: "25px"}}/>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div><a href='http://www.spid.gov.it/' style={{ fontSize: "smaller" }}>Maggiori informazioni su SPID</a></div>
                        <div><a href='http://www.spid.gov.it/richiedi-spid' style={{ fontSize: "smaller" }}>Non hai SPID?</a></div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-xs-12 col-md-6">
                        <button className="spid-button" onClick={() => handleSignDocumentFailure("Certificato CIE non valido")}>
                            <img src="/img/cie-logo.svg" alt="CIE" className="cie-logo" />
                            Accedi con CIE
                        </button>
                    </div>

                    <div className="col-xs-12 col-md-6">
                        <div><a href='https://www.cartaidentita.interno.gov.it/' style={{ fontSize: "smaller" }}>Maggiori informazioni su CIE</a></div>
                        <div><a href='https://www.cartaidentita.interno.gov.it/esercenti/come-attivare-entra-con-cie/' style={{ fontSize: "smaller" }}>Non hai CIE?</a></div>
                    </div>
                </div>
            </div>
        </Card >
    );
};

export default SpidButtonCard;
