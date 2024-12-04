export const handleSignDocument = (navigate, codiceDocumento) => {
    navigate(`firma-documento/${codiceDocumento}`);
};

export const handleViewDocument = (navigate, codiceDocumento) => {
    navigate(`dettaglio-documento/${codiceDocumento}`);
};

export const handleCompileDocument = (navigate, codiceDocumento) => {
    navigate(`compila-documento/${codiceDocumento}`);
};

export const handleViewListDocument = (navigate, stato, codiceDocumento) => {
    { stato == "DA_COMPILARE" && navigate(`documenti-da-compilare/dettaglio-documento/${codiceDocumento}`); }
    { stato == "DA_FIRMARE" && navigate(`documenti-da-firmare/dettaglio-documento/${codiceDocumento}`); }
    { stato == "IN_ATTESA" && navigate(`documenti-in-attesa/dettaglio-documento/${codiceDocumento}`); }
    { stato == "SCADUTO" && navigate(`documenti-scaduti/dettaglio-documento/${codiceDocumento}`); }
    { stato == "FIRMATO" && navigate(`documenti-annullati/dettaglio-documento/${codiceDocumento}`); }
};