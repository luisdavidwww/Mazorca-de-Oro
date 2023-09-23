import React, { useState, useEffect, useRef  } from 'react';


const DropdownPhone = ({ Data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    //Constante Auxiliar
   const refOne = useRef(undefined);
  

    const toggleDropdown = () => {
     setIsOpen(!isOpen);
    };

      const handleclickOutside = (e) => {
        if (!refOne?.current?.contains(e.target)){
            setIsOpen(false)
        } else{
        }
      }

      const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
      };


      useEffect(() => {
        document.addEventListener("click", handleclickOutside, true);
        }, []);

  return (
    <div className='container_Dropdown_Options' ref={refOne}> 
        <button className="btn_options" onClick={toggleDropdown}>
            {selectedOption || "Seleccionar una opción"}
            {isOpen ? " ▲" : " ▼"}
        </button>

                {isOpen ? (
                    <div className="container__Options">
                        <ul className="dropdown-options">
                            {Data.map((option, index) => (
                                <div key={index} onClick={() => handleOptionClick(option)} className='List__Options'>
                                    {option}
                                </div>
                            ))}
                        </ul>
                    </div>
                    
                ):null}
    </div>
    
  )
}

export default DropdownPhone