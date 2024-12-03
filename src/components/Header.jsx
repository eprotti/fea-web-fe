import React from 'react';
import Authentication from './Authentication';
import Navigation from './Navigation';

const Header = () => {

  return (
    <header className="text-white shadow-lg page-header">
      <div id="header-wrapper">
        <div id="top-nav" className="container d-flex justify-content-between align-items-center">

          <div id="top-nav-wrapper">

            <a className="text-white" href="http://www.mim.gov.it">Ministero dell'Istruzione</a>

          </div>

          <Authentication />

        </div>
        <div id="head-lead" className="container d-flex justify-content-between align-items-center">
          <div>
            <div className="logo">
              <a href="/">
                <img src="/logo-sigillo.svg" alt="Logo MIM" height="80" />
              </a>
            </div>
            <h1>
              <a href="/">SIGILLO</a>
              <div className="">Firma Elettronica Avanzata</div>
            </h1>
          </div>
        </div>
      </div>

      <Navigation />

    </header>
  );
};

export default Header;
