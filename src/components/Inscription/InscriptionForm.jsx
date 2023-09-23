import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm.tsx';

//Componentes
import DropdownOptions from './Dropdown/DropdownOptions.jsx';
import DropdownPhone from './DropdownPhone.jsx';

//Data
import State from '../../Data/State.json';

//Estilos
import './InscriptionForm.css';

function InscriptionForm() {
  const { CustBillID, name, lastName, email, password, telefono, onChange } = useForm({
    CustBillID: '',
    name: '',
    lastName:'',
    email: '',
    telefono: ''
  });

  const ProductosBayer = ["Adengo", "Audax", "Roundup", "Decis", "Larvin", "Alsystin"];
  const ProductosICL = ["Improver Max", "Kellus Zinc", "Tonus", "Profol Exclusive", "Concorde", "Transklok"];

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };


  




  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes manejar la carga del archivo (imagen o video) usando 'selectedFile'.
    // Puedes enviarlo a tu servidor o realizar otras acciones según tus necesidades.

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Selected File:', selectedFile);
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
              Documento ID
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
              placeholder='Ingrese su nombre completo'
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
              placeholder='Ingrese su nombre completo'
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
              placeholder='Ingrese su correo electrónico'
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
              placeholder='Ingrese su nombre completo'
              value={telefono} 
              autoComplete='off'
              onChange={(e) => onChange(e.target.value, 'telefono', 'number' )}
              
            />
          </div>

          

          {/* Estado */}
          <div className='Container__Label-Email'>
            <label htmlFor='fullName' className='Label__Form'>
              Estado
            </label>
            <DropdownOptions Data={ State }/>
          </div>

          {/* Ciudad */}
          <div className='Container__Label-Email'>
            <label htmlFor='fullName' className='Label__Form'>
              Ciudad
            </label>
            <DropdownPhone Data={ ProductosICL }/>
          </div>




          {/* Productos Bayer */}
          <div className='Container__Label-Email'>
            <label htmlFor='fullName' className='Label__Form'>
              Productos Bayer Utilizados
            </label>
            <DropdownPhone Data={ ProductosBayer }/>
          </div>

          


           {/* Carga de archivo con estilo */}
           <div className='Container__Label-Dropbox'>
           <label htmlFor='email' className='Label__Form'>
              Cargar Video
            </label>
            <label htmlFor='file' className='Label__Form'>
              <div className='FileUpload'>
                <div className='UploadIcon'>
                  <i className='upload-icon' /> {/* Reemplaza 'upload-icon' con tu clase de ícono */}
                </div>
                <div className='UploadText'>Cargar Archivo</div>
              </div>
            </label>
            <input
              type='file'
              id='file'
              accept='image/*, video/*'
              onChange={handleFileChange}
              style={{ display: 'none' }} // Ocultar el campo de entrada real
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default InscriptionForm;
