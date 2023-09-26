import React, { useState, useEffect, useRef } from 'react';
import './DropdownOptions.css';

const DropdownCity = ({ Data, IdState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [filterText, setFilterText] = useState('');

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

  const handleOptionClick = (ciudad) => {
    setSelectedOption(ciudad);
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleclickOutside, true);
  }, []);

  useEffect(() => {
    setSelectedOption(null)
  }, [IdState]);

  const filteredData = Data.filter((item) =>
  (IdState === null || item.estado_id === IdState ) &&
  item.ciudad.toLowerCase().includes(filterText.toLowerCase())
);


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
                onClick={() => handleOptionClick(item.ciudad)}
                className="List__Options"
              >
                { item.ciudad }
              </div>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default DropdownCity;
