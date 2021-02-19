import React from 'react'

const Navbar = () => {
    return (
<nav className="navbar navbar-light navbar-expand-lg fixed-top shadow text-uppercase bg-blue" id="mainNav">
  <div className="container">
    <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src="assets/img/LIM%20Engenharia%20Versão%20final-01%201.svg" style={{width: '10vh', marginLeft: 15}} /></a><button data-toggle="collapse" data-target="#navbarResponsive" className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" style={{background: 'rgb(207, 100, 40) !important'}}>
      <i className="fa fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="nav navbar-nav ml-auto">
        <li className="nav-item mx-0 mx-lg-1">
          <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#home">Home</a>
        </li>
        <li className="nav-item mx-0 mx-lg-1">
          <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#services">SERVIÇOS</a>
        </li>
        <li className="nav-item mx-0 mx-lg-1">
          <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">CLIENTES</a>
        </li>
        <li className="nav-item mx-0 mx-lg-1">
          <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">SOBRE NÓS</a>
        </li>
        <li className="nav-item mx-0 mx-lg-1">
          <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">CONTATO</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}

export default Navbar
