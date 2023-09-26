import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm.tsx';

// Componentes
import DropdownOptions from './Dropdown/DropdownOptions.jsx';
import DropdownCity from './Dropdown/DropdownCity.jsx';

// Data
import State from '../../Data/State.json';
import City from '../../Data/City.json';

// Estilos
import './InscriptionForm.css';

function InscriptionForm() {
  const { CustBillID, name, lastName, email, password, telefono, direccion, onChange } = useForm({
    CustBillID: '',
    name: '',
    lastName: '',
    email: '',
    telefono: '',
    direccion: ''
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes manejar la carga del archivo (video) usando 'selectedFile'.
    // Puedes almacenarlo localmente o enviarlo a tu servidor según tus necesidades.
    // Luego, envía los demás datos del formulario junto con el archivo.

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Selected File:', selectedFile);

    // Resto de la lógica para enviar el formulario
  };

  return (
    <>
      <div className='Inscripction-container'>
        {/* ... (código del formulario previo) */}

        {/* Carga de archivo con estilo */}
        <div className='Container__Label-Dropbox'>
          <label htmlFor='file' className='Label__Form'>
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

        {/* Resto del formulario */}
        {/* ... (código del formulario previo) */}
      </div>
    </>
  );
}

export default InscriptionForm;