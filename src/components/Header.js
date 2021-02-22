import React from 'react'

const Header = () => {
    return (
<header id="home">
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
    <li data-target="#carouselExampleIndicators" data-slide-to={3} />
    <li data-target="#carouselExampleIndicators" data-slide-to={4} />
  </ol>
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active" style={{backgroundImage: 'url("./assets/img/image5.png")'}}>
      <div className="carousel-caption d-block">
        <a className="js-scroll-trigger" href="#services">
        <h2 className="display-4"> Vistorias de imóveis</h2></a>
        </div>
    </div>
    <div className="carousel-item" style={{backgroundImage: 'url("./assets/img/image2.png")'}}>
      <div className="carousel-caption d-block">
        <a className="js-scroll-trigger" href="#services"><h2 className="display-4">Análises de Viabilidade</h2></a>
      </div>
    </div>
    <div className="carousel-item" style={{backgroundImage: 'url("./assets/img/image3.png")'}}>
      <div className="carousel-caption d-block">
        <a className="js-scroll-trigger" href="#services"><h2 className="display-4">Avaliações de Imóveis</h2></a>
      </div>
    </div>
    <div className="carousel-item" style={{backgroundImage: 'url("./assets/img/image4.png")'}}>
      <div className="carousel-caption d-block">
        <a className="js-scroll-trigger" href="#services"><h2 className="display-4">Projetos</h2></a>
      </div>
    </div>
    <div className="carousel-item" style={{backgroundImage: 'url("./assets/img/image1.png")'}}>
      <div className="carousel-caption d-block">
        <a className="js-scroll-trigger" href="#services"><h2 className="display-4">Consultoria para financiar</h2></a>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

    </header>
    )
}

export default Header
