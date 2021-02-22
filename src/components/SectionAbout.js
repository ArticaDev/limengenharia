import React from 'react'


const SectionAbout = (props) => {
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
          <div className="row" style={{marginBottom: "50px"}}>
          <div
            className="col d-flex justify-content-center"
            style={{marginTop: "50px"}}
          >
            <img
              alt="profile1"
              className="rounded-circle user-le"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFvDR885EUf7w/profile-displayphoto-shrink_800_800/0/1612396405606?e=1618444800&amp;v=beta&amp;t=qp-b5KRIBX13NU_zHpbWKXQ7z7MV4Osx4BEYarWjvOo"
            />
            <a href="https://www.linkedin.com/in/leticia-lima-madia-3a8a0594/">
            <i className="fab fa-linkedin-in hidden-icon-le"></i></a>
          </div>
          <div
            className="col d-flex justify-content-center"
            style={{marginTop: "50px"}}
          >
            <img
              alt="profile2"
              className="rounded-circle user-ma"
              src="https://media-exp1.licdn.com/dms/image/C5603AQFk0AJumsOK_A/profile-displayphoto-shrink_800_800/0/1612443732595?e=1618444800&amp;v=beta&amp;t=Ehm-ispaFDGT1zLniBKKrGQMNfH1btyQZdiLzyjG_IM"
            />
            <a href="https://www.linkedin.com/in/matheus-lima-175413203/">
            <i className="fab fa-linkedin-in hidden-icon-ma"></i></a>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="text-white"style={{fontWeight: "500"}}>
              <br />A&nbsp;<strong>LIM ENGENHARIA</strong>&nbsp;é a consolidação
              de um sonho alimentado pelos irmãos&nbsp;<strong
                >Leticia Lima Madia</strong
              >, atual diretora e engenheira civil, e por&nbsp;<strong
                >Matheus Lima</strong
              >, o também sócio e engenheiro. Atuamos desde
              a&nbsp;<strong>execução</strong>, passando
              por&nbsp;<strong>acompanhamento&nbsp;</strong>de obras
              e&nbsp;<strong>avaliações&nbsp;</strong>das mais diversas
              finalidades, tendo a&nbsp;Caixa Econômica&nbsp;como o marco dessa
              carreira
              de&nbsp;<strong>sucesso&nbsp;</strong>e&nbsp;<strong>fidelização&nbsp;</strong>dos
              clientes e parceiros.<br /><br />
            </h3>
          </div>
        </div>
      </div>
          
      
  </section>

    )
}

export default SectionAbout
