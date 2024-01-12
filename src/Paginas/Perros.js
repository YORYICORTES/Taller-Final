
import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
// de nuevo

import perr from '../assets/img/perr.png';
import perr2 from '../assets/img/perr2.jpg';
import perr3 from '../assets/img/perr3.png';
import perr4 from '../assets/img/perr4.png';
import perr5 from '../assets/img/perr5.png';
import perr6 from '../assets/img/perr6.png';
import perr7 from '../assets/img/perr7.png';
import perr8 from '../assets/img/perr8.png';
import { Link } from 'react-router-dom';
import { mostrarAlerta } from "../functions.js";
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";


//CUERPO COMPONENTE


const Perros = () => {
  const url = "http://localhost:8000/adopcion";// la ruta de mi taller backend 
  const [adopcion, setAdopcion] = useState([]);
  // las variables que utiliza la bd de mascotas
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [correo, setCorreo] = useState('');
  const [residencia, setResidencia] = useState('');
  const [telefono, setTelefono] = useState('');
  const [operacion, setOperacion] = useState('');
  const [titulo, setTitulo] = useState('');

  useEffect(() => {
    getAdopcion();
  }, []);

  const getAdopcion = async () => {
    const respuesta = await axios.get(`${url}/buscar`);
    console.log(respuesta.data);
    setAdopcion(respuesta.data);
  };
 // es para el registro de persona 
  
    const openModal = (opcion, id, nombre, edad) => {
      setId('');
      setNombre('');
      setEdad('');
      setCorreo('');
      setResidencia('');
      setTelefono('');
      setOperacion(opcion);
      if (opcion === 1) {
        setTitulo("Registro de Persona para Adopcion");
      }
      else if (opcion === 2) {
        
      }
  
    };
    

  // por cada imagen mostrar su detalle cada vez que de click en el boton 
  // detalle 
  
    const validar = () => {
      let parametros;
      let metodo;
      if (nombre.trim() === '') {
        console.log("Debe escribir un Nombre");
        mostrarAlerta("Debe escribir un Nombre");
      }
      else if (edad.trim() === '') {
        
        mostrarAlerta("Debe escribir una Edad");
      }
      else if (correo.trim() === '') {
        
        mostrarAlerta("Debe escribir un Correo");
      }
      else if (residencia.trim() === '') {
        
        mostrarAlerta("Debe escribir la dirección de Residencia");
      } else if (telefono.trim() === '') {
        
        mostrarAlerta("Debe escribir el numero de Telefono");
      }
      else {
        if (operacion === 1) {
          parametros = {
            urlExt: `${url}/crear`,
            nombre: nombre.trim(),
            edad: edad.trim(),
            correo: correo.trim(),
            residencia: residencia.trim(),
            telefono: telefono.trim()
          };
          metodo = "POST";
        }
        else {
          parametros = {
            urlExt: `${url}/actualizar/${id}`,
            nombre: nombre.trim(),
            edad: edad.trim(),
            correo: correo.trim(),
            residencia: residencia.trim(),
            telefono: telefono.trim()
          };
          metodo = "PUT";
        }
        enviarSolicitud(metodo, parametros);
  
      }
  
    };
  
    const enviarSolicitud = async (metodo, parametros) => {
      await axios({ method: metodo, url: parametros.urlExt, data: parametros })
        .then((respuesta) => {
          let tipo = respuesta.data.tipo;
          let mensaje = respuesta.data.mensaje;
          mostrarAlerta(mensaje, tipo);
          if (tipo === "success") {
            document.getElementById("btnCerrarModal").click();
            getAdopcion();
          }
        })
        .catch((error) => {
          mostrarAlerta(`Error en la solicitud`, error)
        });
    };
    
  
    function changeImage(imgId) {
      var imgElement = document.getElementById(imgId);
      // Cambia la URL de la imagen según sea necesario
      imgElement.src = "../assets/img/perr2.jpg";
    }
  
    return (

      <>
        <div className="container px-4 text-center">
          <div className="row align-items-end">
            <div className="col">
              <div className="card" style={{ width: '18rem ' }}>
                <img src={perr} id="img2" className="imgperro mx-auto d-block" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div classNameName="btn-group">
                  <button
                      onClick={() => openModal(2)}
                      className="btn btn-dark btn-margin"
                      data-bs-toggle="modal"
                      data-bs-target="#modalDetalle"
                    >
                      <i className="fa-solid fa-circle-plus"></i>Detalles
                    </button>
                    <button
                      onClick={() => openModal(1)}
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#modalMascotas"
                    >
                      <i className="fa-solid fa-circle-plus"></i>Adoptar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '18rem ' }}>
                <img src={perr2} className="imgperro mx-auto d-block" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div classNameName="btn-group">
                  <button
                      onClick={() => openModal(2)}
                      className="btn btn-dark btn-margin"
                      data-bs-toggle="modal"
                      data-bs-target="#modalDetalle"
                    >
                      <i className="fa-solid fa-circle-plus"></i>Detalles
                    </button>
                    <button
                      onClick={() => openModal(1)}
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#modalMascotas"
                    >
                      <i className="fa-solid fa-circle-plus"></i>Adoptar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '18rem ' }}>
                <img src={perr3} className="imgperro mx-auto d-block" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="btn-group">
                  <button
                      onClick={() => openModal(2)}
                      className="btn btn-dark btn-margin"
                      data-bs-toggle="modal"
                      data-bs-target="#modalDetalle"
                    >
                      <i className="fa-solid fa-circle-plus"></i>Detalles
                    </button>
                    <button
                      onClick={() => openModal(1)}
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#modalMascotas"
                    >
                      <i className="fa-solid fa-circle-plus"></i>Adoptar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '18rem ' }}>
                <img src={perr4} className="imgperro mx-auto d-block" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div classNameName="btn-group">
                  <button
                      onClick={() => openModal(2)}
                      className="btn btn-dark btn-margin"
                      data-bs-toggle="modal"
                      data-bs-target="#modalDetalle"
                    >
                      <i className="fa-solid fa-circle-plus"></i>Detalles
                    </button>
                    <button
                      onClick={() => openModal(1)}
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#modalMascotas"
                    >
                      <i className="fa-solid fa-circle-plus"></i>Adoptar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '18rem ' }}>
                <img src={perr5} className="imgperro mx-auto d-block" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="btn-group">
                  <button
                      onClick={() => openModal(2)}
                      className="btn btn-dark btn-margin"
                      data-bs-toggle="modal"
                      data-bs-target="#modalDetalle"
                    >
                      <i className="fa-solid fa-circle-plus"></i>Detalles
                    </button>
                    <button
                      onClick={() => openModal(1)}
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#modalMascotas"
                    >
                      <i className="fa-solid fa-circle-plus"></i>Adoptar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '18rem ' }}>
                <img src={perr6} className="imgperro mx-auto d-block" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="btn-group">
                  <button
                      onClick={() => openModal(2)}
                      className="btn btn-dark btn-margin"
                      data-bs-toggle="modal"
                      data-bs-target="#modalDetalle"
                    >
                      <i className="fa-solid fa-circle-plus"></i>Detalles
                    </button>
                    <button
                      onClick={() => openModal(1)}
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#modalMascotas"
                    >
                      <i className="fa-solid fa-circle-plus"></i>Adoptar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '18rem ' }}>
                <img src={perr7} className="imgperro mx-auto d-block" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="btn-group">
                  <button
                      onClick={() => openModal(2)}
                      className="btn btn-dark btn-margin"
                      data-bs-toggle="modal"
                      data-bs-target="#modalDetalle"
                    >
                      <i className="fa-solid fa-circle-plus"></i>Detalles
                    </button>
                    <button
                      onClick={() => openModal(1)}
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#modalMascotas"
                    >
                      <i className="fa-solid fa-circle-plus"></i>Adoptar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '18rem ' }}>
                <img src={perr8} className="imgperro mx-auto d-block" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="btn-group">
                  <button
                      onClick={() => openModal(2)}
                      className="btn btn-dark btn-margin"
                      data-bs-toggle="modal"
                      data-bs-target="#modalDetalle"
                    >
                      <i className="fa-solid fa-circle-plus"></i>Detalles
                    </button>
                    <button
                      onClick={() => openModal(1)}
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#modalMascotas"
                    >
                      <i className="fa-solid fa-circle-plus"></i>Adoptar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="btn-group btn-group-sm " role="group" aria-label="Small button group">
          <button type="button" className="btn btn-outline-primary" onClick={() => changeImage('img1')}>Anterior</button>
          <button type="button" className="btn btn-outline-primary" onClick={() => changeImage('img2')}>1</button>
          <button type="button" className="btn btn-outline-primary" onClick={() => changeImage('img3')}>2</button>
          <button type="button" className="btn btn-outline-primary" onClick={() => changeImage('img4')}>3</button>
          <button type="button" className="btn btn-outline-primary">Siguiente</button>
          </div>
        </div>
        <div id="modalMascotas" className="modal fade" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <label className="h5">{titulo}</label>
              </div>
              <div className="modal-body">
                <input type="hidden" id="id"></input>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fa-solid fa-gift"></i>
                  </span>
                  <input
                    type="text"
                    id="nombre"
                    className="form-control"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fa-solid fa-gift"></i>
                  </span>
                  <input
                    type="text"
                    id="edad"
                    className="form-control"
                    placeholder="Edad"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
  
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fa-solid fa-gift"></i>
                  </span>
                  <input
                    type="text"
                    id="correo"
                    className="form-control"
                    placeholder="Correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fa-solid fa-gift"></i>
                  </span>
                  <input
                    type="text"
                    id="residencia"
                    className="form-control"
                    placeholder="Residencia"
                    value={residencia}
                    onChange={(e) => setResidencia(e.target.value)}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fa-solid fa-gift"></i>
                  </span>
                  <input
                    type="text"
                    id="telefono"
                    className="form-control"
                    placeholder="Telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                  ></input>
                </div>
                <div className="d-grid col-6 mx-auto">
                  <button onClick={() => validar()} className="btn btn-success">
                    <i className="fa-solid fa-floppy-disk"></i>Guardar
                  </button>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  id="btnCerrarModal"
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
          <button></button>
        </div>
        <div class="modal fade" id="modalDetalle" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button
                  id="btnCerrarModal"
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
  </div>
  
      </>
      
    );
  }
  
export default Perros