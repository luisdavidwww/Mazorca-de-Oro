import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm.tsx';

//Componentes
import DropdownOptions from './Dropdown/DropdownOptions.jsx';

//Data
import State from '../../Data/State.json';
import City from '../../Data/City.json';

//Estilos
import './InscriptionForm.css';

function InscriptionForm() {
  const { CustBillID, name, lastName, email, password, telefono, direccion, onChange } = useForm({
    CustBillID: '',
    name: '',
    lastName:'',
    email: '',
    telefono: '',
    direccion:''
  });


  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Cedula:', CustBillID);
    console.log('Nombres:', name);
    console.log('Apellidos:', lastName);
    console.log('Email:', email);
    console.log('Telefono:', telefono);
    console.log('Direccion:', direccion);
    console.log('Video:', selectedFile);

  };

  return (
    <>
      <div className='Inscripction-container'>
        <h1 className='Titulo-Principal-Inscripcion'>
          Inscribete <span style={{ color: '#ffd800' }}>Ahora</span>
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Cedula */}
          <div className='Container__Label-Email'>
            <label htmlFor='fullName' className='Label__Form'>
              Cedula ID
            </label>
            <input
              type='text'
              className='Input__Form'
              id='CustBillID'
              placeholder='Documento'
              value={CustBillID} 
              autoComplete='off'
              onChange={(e) => onChange(e.target.value, 'CustBillID', 'number' )}
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
              className='Input__Form'
              id='email'
              placeholder='Correo electrónico'
              value={email}
              autoComplete='off'
              onChange={(e) => onChange(e.target.value, 'email', 'emailValidator')}
            />
          </div>

          {/* Telefono */}
          <div className='Container__Label-Email'>
            <label htmlFor='fullName' className='Label__Form'>
              Teléfono
            </label>
            <input
              type='tel'
              className='Input__Form'
              id='telefono'
              placeholder='Teléfono'
              value={telefono} 
              autoComplete='off'
              onChange={(e) => onChange(e.target.value, 'telefono', 'number' )}
              
            />
          </div>

          {/* Estado Y Ciudad */}
          <div className='Container__Label-Email'>
            <label htmlFor='fullName' className='Label__Form'>
              Estado
            </label>
            <DropdownOptions Data={ State } DataCity={ City }/>
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
           <label htmlFor='email' className='Label__Form'>
              Cargar Video
            </label>
            <label htmlFor='file' className='Label__Form'>
              <div className='FileUpload'>
                <div className='UploadIcon'>
                  <i className='upload-icon' /> 
                </div>
                <div className='UploadText'>Cargar Archivo</div>
              </div>
            </label>
            <input
              type='file'
              id='file'
              accept='video/*' // Solo permite archivos de vídeo
              onChange={handleFileChange}
              style={{ display: 'none' }} 
            />
          </div>

          {/* Boton */}
          <div className='container-btn'>
              <button className='btn-form' type="button" >
                Enviar
              </button>
          </div>


        </form>
      </div>
    </>
  );
}

export default InscriptionForm;
