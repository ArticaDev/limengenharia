import React from 'react'


const SectionContact = (props) => {
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
  <div className="col-lg-8 mx-auto">
    <form id="contactForm" name="sentMessage" noValidate="novalidate">
      <div className="control-group">
        <div className="form-group floating-label-form-group controls mb-0 pb-2">
          <label>Nome</label><input className="form-control" type="text" id="name" required placeholder="Nome" /><small className="form-text text-danger help-block" />
        </div>
      </div>
      <div className="control-group">
        <div className="form-group floating-label-form-group controls mb-0 pb-2">
          <label>Email</label><input className="form-control" type="email" id="email" required placeholder="Endereço de Email" /><small className="form-text text-danger help-block" />
        </div>
      </div>
      <div className="control-group">
        <div className="form-group floating-label-form-group controls mb-0 pb-2">
          <label>Telefone</label><input className="form-control" type="tel" id="phone" required placeholder="Telefone" /><small className="form-text text-danger help-block" />
        </div>
      </div>
      <div className="control-group">
        <div className="form-group floating-label-form-group controls mb-5 pb-2">
          <textarea className="form-control" id="message" required placeholder="Digite aqui o que você precisa, sua ideia ou algo onde possamos atuar!" rows={5} defaultValue={""} /><small className="form-text text-danger help-block" />
        </div>
      </div>
      <div className="form-group d-flex justify-content-center">
        <button className="btn btn-primary btn-block" type="button" style={{maxWidth: 200}}>
          Enviar
        </button>
      </div>
    </form>
  </div>
</div>

      </div>
      </div>
          
      
  </section>

    )
}

export default SectionContact
