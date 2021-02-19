import React from 'react'
import CardDesc from './CardDesc'


const SectionServices = (props) => {
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
        <CardDesc blue={props.blue} titulo="Acompanhamento de Obras e Vistorias" desc={["As ", <strong>vistorias e acompanhamentos </strong>, "de obras têm como principal ideia prevenir e atestar que existe qualidade e conformidade nas obras, de forma a garantir sua segurança e a segurança de todos que usam o ambiente!"]} class="fas fa-building d-flex justify-content-center card-icon" />
        <CardDesc blue={props.blue} titulo="Análises de Viabilidade" desc={["Como o próprio nome diz, as  ", <strong> análises </strong>, "de viabilidade garantem, após uma série de estudos e processos, que a obra de fato é factível e possível de realizar, confirmando os cálculos e garantindo um padrão de alta qualidade."]} class="fas fa-clipboard d-flex justify-content-center card-icon" />
        <CardDesc blue={props.blue} titulo="Projetos e avaliações de Imóveis" desc={["Os ", <strong> projetos </strong>, "e as avaliações têm como objetivo trazer a ideia de orçamento e estruturação inicial da construção, onde atuamos com rigor, de modo a garantir o sucesso do cliente no futuro."]} class="far fa-chart-bar d-flex justify-content-center card-icon" />
                </div></div></div>
          
      </div>
          
      
  </section>

    )
}

export default SectionServices
