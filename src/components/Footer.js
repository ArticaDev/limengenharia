import React from 'react'

const Footer = () => {
    return (
<footer className="footer text-center" style={{background: '#0c1e36', marginBottom: '0vh'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-lg-0">
          <div className="row">
            <div className="col">
              <h4 className="text-uppercase" style={{marginBottom: 40}}>
                nossas redes sociais
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a className="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="https://www.linkedin.com/company/lim-engenharia/"><i className="fab fa-linkedin-in fa-fw orange" /></a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="https://www.instagram.com/engenharialim/"><i className="fab fa-instagram fa-fw orange" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xl-6">
          <div className="row d-flex flex-column">
            <div className="col" style={{marginBottom: 45}}>
              <h4 className="text-uppercase mb-4">telefone</h4>
              <p className="lead mb-0 text-white text-animated">
                <span>
                  <a href="callto:1940404534">
                  <br />Telefone: (19) 4040-4534<br />
                  </a>
                  </span>
              </p>
            </div>
            <div className="col">
              <h4 className="text-uppercase mb-4">email</h4>
              <p className="lead mb-0 text-white text-animated">
                <span>
                <a href="mailto:contato@limengenharia.com">
                <br />Email: contato@limengenharia.com<br />
                </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
    )
}

export default Footer
