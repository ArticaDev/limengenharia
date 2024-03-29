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
                <div className="row" style={{ marginBottom: "50px" }}>
                    <div
                        className="col d-flex justify-content-center"
                        style={{ marginTop: "50px" }}
                    >
                        <img
                            alt="profile1"
                            className="rounded-circle user-le"
                            src="assets/img/1612396405606.jpg"
                        />
                        <a href="https://www.linkedin.com/in/leticia-lima-madia-3a8a0594/">
                            <i className="fab fa-linkedin-in hidden-icon-le"></i></a>
                    </div>
                    <div
                        className="col d-flex justify-content-center"
                        style={{ marginTop: "50px" }}
                    >
                        <img
                            alt="profile2"
                            className="rounded-circle user-ma"
                            src="assets/img/1612443732595.jpg"
                        />
                        <a href="https://www.linkedin.com/in/matheus-lima-175413203/">
                            <i className="fab fa-linkedin-in hidden-icon-ma"></i></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="text-white" style={{ fontWeight: "500" }}>
                            <br />A <strong>LIM ENGENHARIA</strong> é a consolidação
              de um sonho alimentado pelos irmãos <strong
                            >Leticia Lima Madia</strong
                            >, atual diretora e engenheira civil, e por <strong
                            >Matheus Lima</strong
                            >, o também sócio e engenheiro. Atuamos desde
              a <strong>execução</strong>, passando
              por <strong>acompanhamento </strong>de obras
              e <strong>avaliações </strong>das mais diversas
              finalidades, tendo a Caixa Econômica como o marco dessa
              carreira
              de <strong>sucesso </strong>e <strong>fidelização </strong>dos
              clientes e parceiros.<br /><br />
                        </h3>
                    </div>
                </div>
            </div>


        </section>

    )
}

export default SectionAbout
