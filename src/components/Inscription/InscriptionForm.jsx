import React, { useState, useEffect } from 'react';
import { useForm } from '../../hooks/useForm.tsx';
import { Link } from 'react-router-dom';
import { uploadFile, uploadFileNew, uploadFileWithProgress } from '../../Firebase/config.js';
import axios from 'axios';

//Componentes AlertSlide
import DropdownOptions from './Dropdown/DropdownOptions.jsx';
import Loader from '../Loader/Loader.jsx';
import AlertSlide from '../Alert/AlertSlide.jsx';

//Data
import State from '../../Data/State.json';
import City from '../../Data/City.json';

//Estilos
import './InscriptionForm.css';

//icons
import { BsFillImageFill } from "react-icons/bs";


//Función para validar Email
function isValidEmail(email) {
  // Expresión regular para validar un correo electrónico
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  // Usamos test() para verificar si el correo electrónico coincide con la expresión regular
  return emailRegex.test(email);
}


//Formulario General
function InscriptionForm() {


  const { CustBillID, name, lastName, email, telefono, direccion, onChange, onChangeNumber } = useForm({
    CustBillID: '',
    name: '',
    lastName: '',
    email: '',
    telefono: '',
    direccion: ''
  });


  //estados para la Lógica del Formulario
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);

  //Estados Para los errores
  const [errorTrim, setErrorTrim] = useState(false);
  const [messageEmail, setMessageEmail] = useState("");

  //Mensaje de Inscripción Exitosa
  const [ ExitMessage, setExitMessage] = useState(false);
  const [ registroExitoso, setRegistroExitoso] = useState(false);

  //Estados de Carga del Video
  const [loanding, setLoanding] = useState(false);
  const [estadoCarga, setEstadoCarga] = useState(null);
  const [messageError, serMessageError] = useState("");
  const [urlVideo, setUrlVideo] = useState("");


  //Variables para la barra de carga
  const [progress, setProgress] = useState(0);



  //Añadir Video a la Web
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
   
    // Verifica la validez del formulario cuando se cambia el archivo
    checkFormValidity();
  };

  // Verifica si todos los campos obligatorios están llenos
  const checkFormValidity = () => {
    if (CustBillID && name && lastName && email && telefono && direccion && selectedFile && state && city) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  //Metodo para registrarse en el concurso
  const onRegisterVideo = async(e) => {
    e.preventDefault()

    // Variable para rastrear si hay errores
    let hasError = false; 

    //VALIDAR EMAIL
    if (email.trim() === '') {
      setErrorTrim(true);
      setMessageEmail("Por favor, ingrese un correo electrónico.");
      hasError = true; // Marca un error si el campo de correo electrónico está vacío
    } else if (!isValidEmail(email)) {
      setErrorTrim(true);
      setMessageEmail("Por favor, ingrese un correo electrónico válido.");
      hasError = true; // Marca un error si el correo electrónico no es válido
    } else {
      setMessageEmail(""); // Borra el mensaje de error si no hay errores en el correo electrónico
    }

    // Si no hay errores
    if (!hasError) {

      //Se Borra la variable de errores
      setErrorTrim(false);

      //Se Borra la variable de errores
      setErrorTrim(false);

      //variable para animacion de carga
      setLoanding(true);
      setProgress(0);

      try {
        const urlBaseVideo = await uploadFileWithProgress(selectedFile, setProgress);
        setEstadoCarga("exitoso"); // Indicar que la carga fue exitosa
        setUrlVideo(urlBaseVideo);
        PostRegister(urlBaseVideo);
      }
      catch(error) {
        console.log(error)
        setEstadoCarga("error"); // Indicar que ocurrió un error en la carga
        setLoanding(false);
      };
 
      
    }
  };


  //Metodo para registrarse en el concurso
  const PostRegister = async(urlBaseVideo) => {

    const token = 'CSG_UkVx5q8iMCLG5nAKtHpdA3VqsJ0NbHG-jWSTW3HcAfy/5Cr=0Ae0A3NV-A?X8xhKzafd?SGu?uzU!IsKubptuy3joFGRs9GBayBjMYKWN3lsAHrbdj6GbyzFx4yn';

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    };

    let dataToSend = {
      "CustBillID": CustBillID,
      "CustEmail": email,
      "CustName1": name,
      "CustName2": lastName,
      "CustPhone": telefono,
      "CityID": city,
      "StateID": state,
      "CustAddres1":direccion,
      "User3": urlBaseVideo,
    };
    
    try {
      const response = await axios.post(
        `https://csgback.casagri-group.com/Csg/`,
        dataToSend,
        { headers }
      );

      //mensaje exitoso en estado Base
      setRegistroExitoso(false);

      if ( response.status == 200 ) {

        const data = response.data;
        serMessageError("Felicidades! Ahora estas participando en el concurso Mazorca de Oro");
        setExitMessage(true);
        setRegistroExitoso(true);

        //se elimina elmesnaje "Subiendo Video"
        setLoanding(false);

      } else {

        serMessageError("Ha ocurrido un error al inscribirte. Intenta de nuevo");
        setExitMessage(true);
        setRegistroExitoso(false);

        //se elimina elmesnaje "Subiendo Video"
        setLoanding(false);
        
      }

    } catch (error) {
      serMessageError("Ha ocurrido un error al inscribirte. Intenta de nuevo");
      setExitMessage(true);
      setRegistroExitoso(false);

      //se elimina elmesnaje "Subiendo Video"
      setLoanding(false);

    }

    
  };





  useEffect(() => {
    checkFormValidity();
  }, [CustBillID, name, lastName, email, telefono, direccion, selectedFile, state, city]);

  useEffect(() => {

  }, [ExitMessage]);



  return (
    <>
        <div>
          { loanding ? (<Loader progressVideo={progress} />):null }
        </div>
        <div>
          {ExitMessage ? (<AlertSlide setExitMessage={setExitMessage} message={messageError} registro={registroExitoso} />):null}
        </div>


      <div className='Inscripction-container'>
        
        
      <h1 className='Titulo-Principal-Inscripcion'>
        Inscribete <span style={{ color: '#ffd800' }}>Ahora</span>
      </h1>

      <div className='consejo__text'>
        <div className='consejo__text__reco'>*Recuerda leer las instrucciones a detalle para cumplir con los requisitos del concurso</div>
        <Link to='/detalles' className='consejo__text__Link'>Detalles</Link>
        </div>
        <div>
        {/* Cedula */}
        <div className='Container__Label-Email'>
          <label htmlFor='CustBillID' className='Label__Form'>
            Cedula ID
          </label>
          <input
            type='number'
            className='Input__Form'
            id='CustBillID'
            placeholder='Documento'
            value={CustBillID} 
            autoComplete='off'
            inputMode=''
            onChange={(e) => onChangeNumber(e.target.value, 'CustBillID', 'number' )}
          />
        </div>

        {/* Nombres */}
        <div className='Container__Label-Email'>
          <label htmlFor='name' className='Label__Form'>
            Nombres Completo
          </label>
          <input
            type='text'
            className='Input__Form'
            id='name'
            placeholder='Ingrese su Nombre Completo'
            value={name}
            autoComplete='off'
            onChange={(e) => onChange(e.target.value, 'name','letters')}
            
          />
        </div>

        {/* Apellidos */}
        <div className='Container__Label-Email'>
          <label htmlFor='lastName' className='Label__Form'>
            Apellidos Completo
          </label>
          <input
            type='text'
            className='Input__Form'
            id='lastName'
            placeholder='Ingrese sus Apellidos'
            value={lastName}
            autoComplete='off'
            onChange={(e) => onChange(e.target.value, 'lastName', 'letters')}
            
          />
        </div>

        {/* Correo Electrónico */}
        <div className='Container__Label-Email'>
          <label htmlFor='email' className='Label__Form'>
            Correo Electrónico
          </label>
          <input
            type='email'
            className={errorTrim && messageEmail ? 'Input__Form-Error':'Input__Form'}
            id='email'
            placeholder='Correo electrónico'
            value={email}
            autoComplete='off'
            onChange={(e) => onChange(e.target.value, 'email', 'emailValidator')}
          />
            {errorTrim && messageEmail && (
              <div className='Mensaje__Error'>
                <div className='MensajeError__Input' style={{position:"absolute"}}>{messageEmail}</div>
                  {/*<OutlinedAlerts ErrorMessage={messageEmail} />*/}
              </div>
            )}
        </div>

        {/* Telefono */}
        <div className='Container__Label-Email'>
          <label for='telefono' className='Label__Form'>
            Teléfono
          </label>
          <input
            type='number'
            className='Input__Form'
            id='telefono'
            placeholder='Teléfono'
            value={telefono} 
            autoComplete='off'
            onChange={(e) => onChangeNumber(e.target.value, 'telefono', 'number' )}
            
          />
        </div>

        {/* Estado Y Ciudad */}
        <div className='Container__Label-Email'>
          <div className='Label__Form'>
            Estado
          </div>
          <DropdownOptions Data={ State } ChangeState={ setState } ChangeCity={ setCity }/>
        </div>

        {/* Dirección */}
        <div className='Container__Label-Email'>
          <label htmlFor='direccion' className='Label__Form'>
            Dirección
          </label>
          <input
            type='text'
            className='Input__Form'
            id='direccion'
            placeholder='Ingrese su Dirección'
            value={direccion}
            autoComplete='off'
            onChange={(e) => onChange(e.target.value, 'direccion','letters')}
          />
        </div>

        {/* Carga de archivo con estilo */}
        <div className='Container__Label-Dropbox'>
         <div for='video' className='Label__Form'>
            Cargar Video
          </div>
          <label htmlFor='file' className='Label__Form'>
            <div className='FileUpload'>
              <div className='UploadIcon'>
                <i className='upload-icon' /> 
              </div>
              <div className='UploadText'>
                {selectedFile ? 
                <div style={{color:"white", fontSize:'14px',display:'flex' }}>
                  <BsFillImageFill style={{fontSize:'21px' , marginRight:'15px',marginTop:'10px'}}/>
                  <p>{  selectedFile.name } </p>
                </div> 
                  : "Cargar Archivo"
                }
              </div>
            </div>
          </label>
          <input
            type='file'
            id='file'
            accept='video/*' // Solo permite archivos de vídeo
            onChange={handleFileChange}
            style={{ display: 'none' }} 
          />
          {/* Mensajes de Carga Para el Usuario  */}
          { estadoCarga == 'exitoso' ? (<div className='consejo__text'>Video Cargado Con éxito</div>):(null)}
          { estadoCarga == 'error' ? (<div className='error__text'>Error al cargar el archivo</div>):(null)}
        </div>

        {/* Boton */}
        <div className='container-btn'>
          <button
            className={ isFormValid ? 'btn-form' : 'btn-form-inActive' }
            type="submit"
            onClick={(e) => { onRegisterVideo(e) }}
            disabled={!isFormValid} // Habilita el botón solo si el formulario es válido
          >
            Enviar
          </button>
        </div>

      </div>
      </div>

    </>
  );
}

export default InscriptionForm;
