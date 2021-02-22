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
          <div className="container">
          <div className="row justify-content-center" style={{marginTop: '5%'}}>
              <CardDesc blue={props.blue} titulo="Acompanhamento de Obras e Vistorias" desc={["O ", <strong> acompanhamento de obras </strong>, " têm como principal finalidade verificar se a execução está em conformidade com os projetos, prazos e qualidade nos serviços."]} class="fas fa-building d-flex justify-content-center card-icon" />
              <CardDesc blue={props.blue} titulo="Análises de Viabilidade" desc={["Como o próprio nome diz, as  ", <strong> análises </strong>, "de viabilidade garantem, após uma série de estudos e processos, que a obra de fato é exequível, tanto sobre aspectos técnicos quanto financeiros."]} class="fas fa-clipboard d-flex justify-content-center card-icon" />
              <CardDesc blue={props.blue} titulo="Avaliações de Imóveis" desc={["As ", <strong> avaliações de imóveis </strong>, " servem para obter o valor de mercado do imóvel e sua possível aceitação técnica como garantia."]} class="far fa-chart-bar d-flex justify-content-center card-icon" />
              <CardDesc blue={props.blue} titulo="Projetos" desc={["Os ", <strong> projetos </strong>, "têm como objetivo trazer a ideia de orçamento e estruturação inicial da construção, onde atuamos com rigor, de modo a garantir o sucesso do cliente no futuro."]} class="fas fa-pencil-ruler d-flex justify-content-center card-icon" />
              <CardDesc blue={props.blue} titulo="Consultoria para financiamento bancário" desc={["As ", <strong> consultorias </strong>, " orientam os clientes através do processo da compra de um imóvel, oferecendo a ele a melhor solução de financiamento para seu perfil."]} class="far fa-money-bill-alt d-flex justify-content-center card-icon" />
            </div>
          </div>
          </div>
          
      
  </section>

    )
}

export default SectionServices
