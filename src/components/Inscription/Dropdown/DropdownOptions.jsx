import React, { useState, useEffect, useRef } from 'react';
import DropdownCityTwo from './DropdownCityTwo.jsx';
//Data
import City from '../../../Data/City.json';
//Estilos
import './DropdownOptions.css';

const DropdownOptions = ({ Data, ChangeState, ChangeCity }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [filterText, setFilterText] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  // Constante Auxiliar
  const refOne = useRef(undefined);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleclickOutside = (e) => {
    if (!refOne?.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleOptionClick = (estado, id ) => {
    setSelectedOption(estado);
    //Aqui va cambiando el estado a elegir
    ChangeState(estado);
    setSelectedId(id);
    setIsOpen(false);
  };


  const filteredData = Data.filter((item) =>
    item.estado.toLowerCase().includes(filterText.toLowerCase())
  )

  useEffect(() => {
    document.addEventListener('click', handleclickOutside, true);
  }, []);


  

  return (
    <div className="container_Dropdown_Options" ref={refOne}>
      <button className="btn_options" onClick={toggleDropdown}>
        {selectedOption || 'Seleccionar una opción'}
        {isOpen ? ' ▲' : ' ▼'}
      </button>
      {isOpen ? (
        <div className="container__Options_Scroll">
          
          <ul className="dropdown-options">
            <div className='container__Input__Search'>
              <input
              type="text"
              placeholder="Buscar..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="Input__Form-Search"
              />
            </div>
          
            {filteredData.map((item, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(item.estado, item.id)}
                className="List__Options"
              >
                { item.estado }
              </div>
            ))}
          </ul>
        </div>
      ) : null}

        <div className='Container__Label-Email'>
            <label htmlFor='fullName' className='Label__Form'>
              Ciudad
            </label>
            <DropdownCityTwo Data={ City } IdState={ selectedId } ChangeCity={ ChangeCity }/>
        </div>

      
    </div>
  );
};

export default DropdownOptions;
