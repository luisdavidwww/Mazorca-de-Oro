import { useState } from 'react';

export const useForm = <T extends Object>( initState: T ) => {
    
    const [state, setState] = useState( initState );

    //para cambiar datos del formulario
    const onChangeTWO = ( value: string, field: keyof T ) => {
        setState({
            ...state,
            [field]: value
        });
        
    }

    const onChange = (value: string, field: keyof T, validationType?: string) => {
        // Realizar validaciones según el campo y el tipo de validación
        if (field === 'CustBillID'  && validationType === 'number' && !/^\d*$/.test(value)) {
            // Validación para números en el campo 'telefono'
            return;
          }

        if (field === 'name' && validationType === 'letters' && !/^[A-Za-z\s]*$/.test(value)) {
          // Validación para letras y espacios en el campo 'name'
          return;
        }

        if (field === 'lastName' && validationType === 'letters' && !/^[A-Za-z\s]*$/.test(value)) {
            // Validación para letras y espacios en el campo 'name'
            return;
          }
    {/* 
        if (field === 'email' && validationType === 'emailValidator' && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          // Validación para correo electrónico en el campo 'email'
          return;
        }
    */}
        if (field === 'telefono' && validationType === 'number' && !/^\d*$/.test(value)) {
          // Validación para números en el campo 'telefono'
          return;
        }

        // Si no hay validaciones o si pasa las validaciones, actualizar el estado
        setState({
        ...state,
        [field]: value
      });
    }

    //en el caso que queramos actualizar todos los valores del formulario
    const setFormValue = ( form: T ) =>{
        setState( form );
    }

    return {
        ...state,
        form: state,
        onChange,
        setFormValue
    }

}