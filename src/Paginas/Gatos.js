import React from 'react';
import perr from '../assets/img/perr.png';
import "../App.css";

const Gatos = () => {
  return (
    <div className="container text-center">
      <div className="row align-items-end">
        <div className="col">
          <div className="card" style={{ width: '18rem ' }}>
            <img src={perr} className="imgperro mx-auto d-block" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: '18rem ' }}>
            <img src={perr} className="imgperro mx-auto d-block" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: '18rem ' }}>
            <img src={perr} className="imgperro mx-auto d-block" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: '18rem ' }}>
            <img src={perr} className="imgperro mx-auto d-block" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gatos