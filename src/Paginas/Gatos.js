import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { mostrarAlerta } from "../functions.js";
//import { Link } from 'react-router-dom';
// Swal from 'sweetalert2';
//import withReactContent from "sweetalert2-react-content";
import gat1 from '../assets/img/gat1.png';
import gat2 from '../assets/img/gat2.png';
import gat3 from '../assets/img/gat3.png';
import gat4 from '../assets/img/gat4.png';
import gat5 from '../assets/img/gat5.png';
import gat6 from '../assets/img/gat6.png';
import gat7 from '../assets/img/gat7.png';
import gat8 from '../assets/img/gat8.png';
import gat9 from '../assets/img/gat9.png';

const Gatos = () => {
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

  const nomberGato = [
    "Siamés",
    "Maine Coon",
    "British Shorthair",
    "Himalayo",
    "Gato Ceilan",
    "Siames Tradicional",
    "Gato Showshoe",
    "Ashera",
    "Britanico de pelo largo"
  ];

  const descriptions = [
    "El gato siamés probablemente sea una de las razas de gatos más populares del mundo actual. El azul intenso de su mirada hace que nos quedemos embobados mirándolo y, si a eso le sumamos la combinación de colores en su pelaje, el resultado es un esbelto, elegante y adorable gato que nos roba el corazón",
    "destaca por ser un felino grande, robusto y de carácter dócil. No obstante, debido a sus peculiaridades en cuanto a características, personalidad o cuidados, será fundamental informarnos previamente si nuestro deseo es adoptar a uno.",
    "El british shorthair, también conocido como gato británico de pelo corto, es considerada una de las razas más antiguas y populares de Gran Bretaña.",
    "es un cruce entre el persa, de quien ha desarrollado sus características físicas y del siamés, de quien ha heredado el patrón característico. La combinación de estos dos predecesores nos ofrece un gato único y elegante.",
    "es un felino poco común, ya que existen muy pocos ejemplares encontrados en Francia e Italia. No obstante, a día de hoy es una raza que se encuentra en pleno proceso de cría y selección.",
    "Estos gatos aparecieron en el siglo XIV, donde eran unos gatos muy valorados e incluso sagrados. Este gato dio lugar al siamés moderno que conocemos hoy en día cuando se exportó a Europa. Se trata de un gato mediano, más robusto que el siamés moderno.",
    "encontramos esta raza felina cuya estampa es realmente preciosa y elegante. Hablamos de los gatos snowshoe, que, como su nombre indica, parecen tener las patas nevadas.",
    "es sin duda un gato muy popular ya sea por su esbelta y hermosa figura, por el carácter tranquilo y silente o por el desorbitado precio de quienes le crearon. Efectivamente, el gato ashera es un felino desarrollado en un laboratorio estadounidense, un híbrido entre diversas especies.",
    "El gato británico de pelo largo proviene del cruce entre británicos de pelo corto y persas tras las guerras mundiales. Aunque al principio no quisieron crear una raza nueva, con el tiempo han sido valorados y a día de hoy hay asociaciones que los han reconocido como raza. Físicamente son similares a los británicos de pelo corto pero con el pelo semi largo."
    // Agrega más descripciones para cada imagen
  ];

  const descripGeneral = [
    " 1",
    " 2",
    " 3",
    " 4",
    " 5",
    " 6",
    " 7",
    " 8",
    " 9"
  ]

  
  const initialImagatos = [gat1, gat2, gat3, gat4, gat5, gat6, gat7, gat8, gat9];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalItems = initialImagatos.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentImages = initialImagatos.slice(indexOfFirstItem, indexOfLastItem);
  const currentnomberGato = nomberGato.slice(indexOfFirstItem, indexOfLastItem);
  const currentDescriptions = descriptions.slice(indexOfFirstItem, indexOfLastItem);
  const currentDescripGeneral = descripGeneral.slice(indexOfFirstItem, indexOfLastItem);


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
            <img src={image} className="imggato mx-auto d-block" alt={`gato ${index + 1}`} />
            <div className="card-body">
              <h5 className="card-title">{currentnomberGato[index]}</h5>
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
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{currentnomberGato[index]}</h1>
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

export default Gatos;