import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { mostrarAlerta } from "../functions.js";
//import { Link } from 'react-router-dom';
//import Swal from 'sweetalert2';
//import withReactContent from "sweetalert2-react-content";
import perr1 from '../assets/img/perr1.PNG';
import perr2 from '../assets/img/perr2.PNG';
import perr3 from '../assets/img/perr3.PNG';
import perr4 from '../assets/img/perr4.PNG';
import perr5 from '../assets/img/perr5.PNG';
import perr6 from '../assets/img/perr6.PNG';
import perr7 from '../assets/img/perr7.PNG';
import perr8 from '../assets/img/perr8.PNG';
import perr9 from '../assets/img/perr9.PNG';

const Perros = () => {
  const url = "http://localhost:8000/adopcion";
  const [adopcion, setAdopcion] = useState([]);
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

  const nomberperro = [
    "Basset hound",
    "Doberman",
    "Northern Inuit",
    "Perro lobo herreño",
    "Perro del Faraon",
    "Clumber Spaniel",
    "Perro de Agua Portugues",
    "Pinscher austriaco",
    "Boxer"
  ];

  const descriptions = [
    "Tienen un aspecto singular que hace que tengan admiradores por el mundo entero porque son unos perros notoriamente más largos que altos,  1",
    "es un perro elegante, musculoso y poderoso. Con un cuerpo compacto y poderoso, el perro dóberman ha cautivado el corazón de muchísimas personas durante muchos años 2",
    "es una raza originaria de Gran Bretaña que se crio con la finalidad de obtener un perro con apariencia de lobo pero con el carácter propio de los perros domésticos 3",
    "es un perro originario de la isla canaria de El Hierro. Tradicionalmente, fue un perro empleado para el pastoreo del ganado ovino y caprino 4",
    "este lebrel es un excelente perro de compañía, que destaca por su nobleza y fidelidad 5",
    "Tienen un carácter excepcional y su entrenamiento y educación son sencillos debido a su inteligencia y buena actitud. 6",
    " Este precioso can se puede parecer en algunos aspectos al perro de aguas español, al que puede que estemos más habituados 7",
    "Estos canes son unos animales que les gusta muchos curiosear y descubrir cosas nuevas 8",
    "es una de las razas caninas de tipo moloso más populares del mundo y nace del cruce entre un Brabant bullenbeisser y un Bulldog 9"
    // Agrega más descripciones para cada imagen
  ];

  const initialImages = [perr1, perr2, perr3, perr4, perr5, perr6, perr7, perr8, perr9];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalItems = initialImages.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentImages = initialImages.slice(indexOfFirstItem, indexOfLastItem);
  const currentNomberperro = nomberperro.slice(indexOfFirstItem, indexOfLastItem);
  const currentDescriptions = descriptions.slice(indexOfFirstItem, indexOfLastItem);
  


  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const getAdopcion = async () => {
    try {
      const respuesta = await axios.get(`${url}/buscar`);
      setAdopcion(respuesta.data);
    } catch (error) {
      mostrarAlerta('Error al obtener los datos de adopción', 'error');
    }
  };

  const openModal = (opcion, id, nombre, edad, correo, residencia, telefono) => {
    setId('');
    setNombre('');
    setEdad('');
    setCorreo('');
    setResidencia('');
    setTelefono('');
    setOperacion(opcion);
    if (opcion === 1) {
      setTitulo("Registro de Persona para Adopcion");
    } else if (opcion === 2) {
      // Aquí puedes agregar lógica adicional para la opción 2 si es necesario
    }
  };

  const validar = () => {
    // Validar los campos antes de enviar la solicitud
    if (nombre.trim() === '') {
      mostrarAlerta("Debe escribir un Nombre");
    } else if (edad.trim() === '') {
      mostrarAlerta("Debe escribir una Edad");
    } else if (correo.trim() === '') {
      mostrarAlerta("Debe escribir un Correo");
    } else if (residencia.trim() === '') {
      mostrarAlerta("Debe escribir la dirección de Residencia");
    } else if (telefono.trim() === '') {
      mostrarAlerta("Debe escribir el numero de Telefono");
    } else {
      const parametros = {
        urlExt: operacion === 1 ? `${url}/crear` : `${url}/actualizar/${id}`,
        nombre: nombre.trim(),
        edad: edad.trim(),
        correo: correo.trim(),
        residencia: residencia.trim(),
        telefono: telefono.trim()
      };
      const metodo = operacion === 1 ? "POST" : "PUT";
      enviarSolicitud(metodo, parametros);
    }
  };


  const enviarSolicitud = async (metodo, parametros) => {
    try {
      const respuesta = await axios({ method: metodo, url: parametros.urlExt, data: parametros });
      const tipo = respuesta.data.tipo;
      const mensaje = respuesta.data.mensaje;
      mostrarAlerta(mensaje, tipo);
      if (tipo === "success") {
        document.getElementById("btnCerrarModal").click();
        getAdopcion();
      }
    } catch (error) {
      mostrarAlerta(`Error en la solicitud`, 'error');
    }
  };

  return (
    <>
    <div className="row">
      {currentImages.map((image, index) => (
        <div className="col" key={index}>
          
          <div className="card"  style={{ width: '18rem' }}>
            <img src={image} className="imgperro mx-auto d-block" alt={`Perro ${index + 1}`} />
            <div className="card-body">
                    <h5 className="card-title">{currentNomberperro[index]}</h5>
                    <p className="card-text">{currentDescriptions[index]}</p>
                    <div classNameName="btn-group">
                      <button
                        onClick={() => openModal(2)}
                        className="btn btn-dark btn-margin"
                        data-bs-toggle="modal"
                        data-bs-target={`#modalDetalle${index + 1}`}
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
      ))}
    </div>
      <div className="d-flex justify-content-center">
        <div className="btn-group btn-group-sm " role="group" aria-label="Small button group">
          <button type="button" className="btn btn-outline-primary" onClick={previousPage} disabled={currentPage === 1}>Anterior</button>
          <button type="button" className="btn btn-outline-primary" onClick={nextPage} disabled={currentPage === totalPages}>Siguiente</button>
        </div>
      </div >
    
      
      {/* Modal de Registro de Persona */}
      <div id="modalMascotas" className="modal fade" aria-hidden="true">
        {/* Contenido del modal */}
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
      {/* Modal de Detalle */}
      {currentImages.map((image, index) =>(
        <div className="col" key={index}>
          <div className="modal fade" id={`modalDetalle${index + 1}`} tabIndex="-1" aria-labelledby={`modalDetalle${index + 1}Label`} aria-hidden="true">
              {/* Contenido del modal */}
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{currentNomberperro[index]}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  {currentDescriptions[index]}
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
        </div>
      ))}
    </>
  );
}

export default Perros;