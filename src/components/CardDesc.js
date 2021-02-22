import React from 'react'

const CardDesc = (props) => {


  if (props.blue === '0'){
    return (
              <div className="card bg-blue">
                <div className="card-body bg-blue">
                  <div className="row">
                    <div className="col" style={{marginBottom: '0px'}}>
                      <i
                        className={props.class}
                      ></i>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <h3
                        className="text-center card-title"
                      >
                        {props.titulo}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

    )}
  else{
    return( 
    <div className="col-xl-4 col-md-6 col-sm-8 mt-5">
    <div className="card bg-dark-blue" style={{minHeight: "408px"}}>
    <div className="card-body bg-dark-blue">
      <div className="row">
        <div className="col" style={{marginBottom: '0px'}}>
          <i
            className={props.class}
          ></i>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4
            className="text-center card-title"
          >
            {props.titulo}
          </h4>
        </div>
      </div>
      <div className="row" style={{marginTop: '15px'}}>
        <div className="col">
          <p className="text-white text-center">
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
  }
}

export default CardDesc
