import React from 'react'
import CardDesc from './CardDesc'


const SectionClients = (props) => {
    return (
      <section id={props.id} className={props.class}>
      <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="text-uppercase text-center text-secondary">
                {props.titulo}
              </h2>   
            </div>
          </div>
          <div className="row" style={{marginTop: '5%'}}>
          <div className="col">
            <div
              className="card-group"
            >
        <CardDesc blue={props.blue} titulo="+ de 2000 vistorias realizadas" class="fas fa-cogs d-flex justify-content-center card-icon" />
        <CardDesc blue={props.blue} titulo="+ de 1000 acompanhamentos de obra" class="fas fa-users d-flex justify-content-center card-icon" />
        <CardDesc blue={props.blue} titulo="+ de 1000 avaliações de imóveis" class="far fa-thumbs-up d-flex justify-content-center card-icon" />
                </div></div></div>
          

                <h3 className="text-center" style={{color: '#ce6428', marginTop: '35px', marginBottom: '30px'}}>
          Nós temos orgulho em ter trabalhado com:
        </h3>
        <div className="row" style={{marginTop: '10px'}}>
          <div
            className="col-12 d-flex justify-content-center align-items-center"
            style={{marginBottom: '30px'}}
          >
            <img
              src="https://logodownload.org/wp-content/uploads/2014/02/caixa-logo-4.png"
              style={{width: "200px"}}
            />
          </div>
          <div
            className="col d-flex justify-content-center align-items-center"
          >
            <img
              src="https://logodownload.org/wp-content/uploads/2014/05/banco-do-brasil-logo-1.png"
              style={{width: "250px"}}
            />
          </div>
        </div>
      </div>
          
      
  </section>

    )
}

export default SectionClients
