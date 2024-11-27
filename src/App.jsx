import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Importa useDispatch e useSelector
import { setUser, resetUser } from './store'; // Importa le azioni Redux
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const user = useSelector(state => state.user);  // Ottieni lo stato dell'utente
  const dispatch = useDispatch();  // Usa dispatch per inviare azioni

  return (
    <div className="container mt-5">
      <h1 className="display-3">Benvenuto in React + Vite + Bootstrap + Redux!</h1>
      <p className="lead">Questa è la homepage dell'applicazione.</p>
      <div className="my-3">
        <h2>Utente: {user.name}</h2>
        <p>Email: {user.email}</p>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(setUser({ name: 'John Doe', email: 'john.doe@example.com' }))}
        >
          Imposta utente
        </button>
        <button
          className="btn btn-secondary ms-2"
          onClick={() => dispatch(resetUser())}
        >
          Resetta utente
        </button>
      </div>
    </div>
  );
}

function DocumentiDaCompilare() {
  return (
    <div className="container mt-5">
      <h1 className="display-3">Informazioni su di noi</h1>
      <p className="lead">Questa è la pagina di About, dove puoi aggiungere informazioni sul tuo progetto.</p>
    </div>
  );
}

function DocumentiDaFirmare() {
  return (
    <div className="container mt-5">

      <h2 className="mt-0 mb-1">Lista documenti da firmare</h2>

      <div className="row mx-0">

        <div className="col-md-8 pa-0">

          <div className="card pa-15 mb-15 card-corner-alert">

            <div className="card-body">

              <a href="#0" className="popover-corner" tabIndex="0" data-toggle="popover-alert" data-content="Il documento sta per scadere. Una volta scaduto il documento non potrà essere più firmato e verrà spostato nell'Archivio Documenti alla voce Scaduti" data-original-title="" aria-label="stato documento: in scadenza" data-yet-open="0">
                <span className="leoicon leo-exclamation halign halign-pull-right mr-5 icon-xtop-01 leoicon-s"></span>
              </a>

              <div className="isrelative light">
                <span className="leoicon leo-calendar halign icon-xtop-01x"></span>
                <p className="ml-15 mb-0"><strong>Inserimento:</strong> 21/11/2024 - <strong>Scadenza:</strong> 30/11/2024</p>
              </div>

              <hr className="thin-color-separator border-cc-01 mb-1" />

              <h4 className="ma-0">Titolo del documento</h4>

              <p className="text-ml mt-1">
                Descrizione del documento
              </p>

            </div>

            <div className="card-footer mt-15">
              <a href="#" className="btn btn-block btn-primary isrelative text-size-sm">
                Firma documento
                <span className="leoicon leo-sign halign halign-pull-right mr-5"></span>
              </a>
            </div>

            <p className="text-right mt-1 mb-0">
              <a href="#" className="isrelative block pr-15">
                <strong>Vedi dettaglio documento</strong>
                <span className="leoicon leo-chevron-right halign halign-pull-right leoicon-s"></span>
              </a>
            </p>

          </div>

        </div>

        <div className="col-md-4 pa-0">

          <div className="container-right-col">

            <div className="card py-1 px-15 mb-15">

              <div className="card-body">

                <h5 className="my-0 clearfix text-uppercase">
                  Filtra documenti
                  <span className="leoicon leo-android-funnel pull-right"></span>
                </h5>

                <hr className="my-1" />

                <div className="form-container bg-white">

                  <form name="sidebar-search" className="validit" action="/fea-web/app/documenti-da-firmare" autoComplete="off">

                    <fieldset>

                      <div className="form-group">
                        <label htmlFor="year">Anno</label>
                        <select id="year" name="anno" className="form-control bg-card" defaultValue="" aria-label="Anno">
                          <option value="">Seleziona</option>
                          <option value="2024" >2024</option>
                          <option value="2023" >2023</option>
                          <option value="2022" >2022</option>
                          <option value="2021" >2021</option>
                          <option value="2020" >2020</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="doc" className="clearfix block isrelative">Nome documento:
                          <span className="pull-right">
                            <a href="#0" className="pa-0" data-toggle="popover" data-content="&Egrave; possibile inserire termini parziali">
                              <span className="leoicon leo-help"></span>
                            </a>
                          </span>
                        </label>
                        <input type="text" id="doc" name="nomeDocumento" className="form-control bg-card" placeholder="Inserire il nome del documento" aria-label="Nome documento" />
                      </div>

                      <div className="form-group sel-dynamic-group">
                        <label htmlFor="req-application">Applicazione richiedente</label>
                        <select id="req-application" name="applicazioneRichiedente"
                          className="form-control bg-card sel-dynamic sel-haschild"
                          aria-label="Applicazione richiedente" defaultValue="">
                          <option value="">Seleziona</option>
                          <option value="SSSSAD" >App GAD</option>
                          <option value="AXIOS" >Axios</option>
                          <option value="NTCAL" >BGIC833004 - IC Calusco d'Adda</option>
                          <option value="UPLDOC" >CARICAMENTO DOCUMENTO</option>
                          <option value="C7CWCW" >Commissione WEB</option>
                          <option value="SSSSAS" >Curriculum Area Studente</option>
                          <option value="SSSSES" >Esami di Stato</option>
                          <option value="FADH" >Fea Housekeeping</option>
                          <option value="FADI" >Fea Web</option>
                          <option value="SSIN" >Gestione Inventario Scuola</option>
                          <option value="SN33" >SIDI - Gestione Contratti</option>
                          <option value="FADG" >Sigillo Gestione</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="doc-type">Tipologia documento</label>
                        <select id="doc-type" name="tipologiaDocumento" className="form-control bg-card sel-dynamic"
                          data-choice="Seleziona una tipologia documento" aria-label="Tipologia documento" defaultValue=""
                          disabled>
                          <option value="">Seleziona un'applicazione richiedente</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="sign-type">Tipologia firma</label>
                        <select id="sign-type" name="tipoFirma" className="form-control bg-card" aria-label="Tipologia firma" defaultValue="">
                          <option value="">Seleziona</option>
                          <option value="FIRMA_SINGOLA" >Firma singola</option>
                          <option value="FIRMA_MULTIPLA" >Firma multipla</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="date-insert">Data inserimento</label>
                        <input type="text" id="date-insert" name="dataInserimento" className="form-control bg-card dateit" placeholder="Seleziona una data" aria-label="Data inserimento" />
                      </div>

                      <button type="submit" className="btn btn-block btn-primary" aria-label="applica filtri">Applica filtri</button>

                    </fieldset>
                  </form>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

// Componente Header
function Header() {
  return (
    <header className="text-white shadow-lg page-header">
      <div id="header-wrapper">
        <div id="top-nav" className="container d-flex justify-content-between align-items-center">

          <div id="top-nav-wrapper">

            <a className="text-white" href="http://www.leo.gov.it">Ministero dell'Istruzione</a>

          </div>

        </div>
        <div id="head-lead" className="container d-flex justify-content-between align-items-center">
          <div>
            <div className="logo">
              <a href="#">
                <img src="/logo-sigillo.svg" alt="Logo MIM" height="80" />
              </a>
            </div>
            <h1>
              <a href="#">SIGILLO</a>
              <div className="">Firma Elettronica Avanzata</div>
            </h1>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light container d-flex justify-content-between align-items-center main-menu-container-h">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/documenti-da-compilare">Documenti da compilare</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/documenti-da-firmare">Documenti da firmare</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/documenti-in-attesa">Documenti in attesa</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/firma-massiva">Firma massiva</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>

  );
}

function Footer() {
  return (
    <footer className="text-white">
      <p>
        <a href="http://www.leo.gov.it">Ministero dell'Istruzione</a>
        <span className="allright"> - </span>
        <span className="allright">Tutti i diritti riservati © 2024</span>
      </p>
    </footer>
  );
}





function App() {
  return (
    <div id="main-container">
      <Header />
      <div className="container pb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documenti-da-compilare" element={<DocumentiDaCompilare />} />
          <Route path="/documenti-da-firmare" element={<DocumentiDaFirmare />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
