import React from 'react';

//Imagenes 
import  mazorcaPNG   from "../../static/images/home/Mazorca-OroPNG.png";

//videos
import { AiFillCheckCircle } from "react-icons/ai";

//Estilos
import './DetallesConcurso.css';

function DetallesConcurso() {
  return (
  <>  
    <div className='detail-container'>
      {/* Condiciones Obligatorias del Concurso  */}
      <div className='Detail__title__Container'>
        <h1 className='Titulo-Principal-detail'>
          Condiciones Obligatorias <span style={{ color: '#ffd800' }}>para el concurso</span>
        </h1>
      </div>

      {/* Contenido  */}
      <div className='Detail__text__Container'>
        <ul style={{margin:'0px', padding:'0px'}}>
          <li>
            <p className='text__detail'>
              <AiFillCheckCircle style={{marginRight:'0.5rem',color:'#ffd800'}}/>
              El único hibrido que puede participar es el DK-8719
            </p>
          </li>
          <li>
            <p className='text__detail'>
              <AiFillCheckCircle style={{marginRight:'0.5rem',color:'#ffd800'}}/>
              Tu lote debe ser Mínimo de 10 hectáreas
            </p>
          </li>
          <li>
            <p className='text__detail'>
              <AiFillCheckCircle style={{marginRight:'0.5rem',color:'#ffd800'}}/>
              Debes Llenar todo el formulario de la Página web de registro incluyendo el video en el lote
            </p>
          </li>
          <li>
            <p className='text__detail'>
              <AiFillCheckCircle style={{marginRight:'0.5rem',color:'#ffd800'}}/>
              El video debe durar un máximo de 2 minutos contener la siguiente información:
            </p>
            <ul className='Detail__text__Container-interno' style={{margin:'0px', padding:'0px'}}>
              <li>
                <p className='text__detail-interno'>- Nombre y Apellido</p>
              </li>
              <li>
                <p className='text__detail-interno'>- Cuánto tiempo llevas como agricultor</p>
              </li>
              <li>
                <p className='text__detail-interno'>- ¿De donde eres?</p>
              </li>
              <li>
                <p className='text__detail-interno'>- Tamaño de tu finca</p>
              </li>
              <li>
                <p className='text__detail-interno'>- Que ventajas ves en el DK-8719</p>
              </li>
              <li>
                <p className='text__detail-interno'>- Población de plantas a cosecha</p>
              </li>
            </ul>
          </li>
          <li>
            <p className='text__detail'>
              <AiFillCheckCircle style={{marginRight:'0.5rem',color:'#ffd800'}}/>
              Debes demostrar que tu lote es autofinanciado o, en caso de ser financiado por una institución, llevar documentación que lo respalde.
            </p>
          </li>
          <li>
            <p className='text__detail'>
              <AiFillCheckCircle style={{marginRight:'0.5rem',color:'#ffd800'}}/>
              En caso de obtener el primer premio, debes contar con la documentación necesaria para viajar a México
            </p>
          </li>
          <li>
            <p className='text__detail'>
              <AiFillCheckCircle style={{marginRight:'0.5rem',color:'#ffd800'}}/>
              En caso de obtener el primer premio y no poseer la documentación necesaria para viajar a México, podrá acceder al segundo premio, y el segundo lugar obtendría el viaje
            </p>
          </li>
          <li>
            <p className='text__detail'>
              <AiFillCheckCircle style={{marginRight:'0.5rem',color:'#ffd800'}}/>
              El video de tu lote será publicado en el Facebook Oficial de Bayer
            </p>
          </li>
        </ul>
            
      </div>

    </div>  

    <div className='detail-container-politicas'>
      {/* Politicas de Privacidad  */}
      <h1 className='Titulo-Principal-detail' style={{marginBottom:'1rem'}}>
        Política de <span style={{ color: '#ffd800' }}>Privacidad</span>
      </h1>

      {/* Contenido de Politicas de Privacidad  */}
      <div className='Detail__text__Container-Politica'>
        {/* Elaborado por:  */}
        <p className='text__detail__politica'>
          Este sitio web  ha sido desarrollado por CASAGRI en conjunto con Bayer S.A. 
        </p>

        {/* Manejo de Datos Personales*/}
        <h3 className='SubTitulo-Principal-detail'>Manejo de los datos personales</h3>

        <p className='text__detail'>
          A continuación, deseamos proporcionarle información sobre cómo tratamos sus datos personales cuando utiliza nuestro sitio web. 
          A menos de que se indique lo contrario en los siguientes capítulos, la base jurídica para el tratamiento de sus datos personales 
          resulta del hecho de que dicho tratamiento es necesario para poner a disposición las funcionalidades del sitio web solicitadas por usted.
        </p>


        {/* Uso de nuestro sitio web*/}
        <h3 className='SubTitulo-Principal-detail'>Uso de nuestro sitio web</h3>


        {/* Acceso a nuestro sitio web  */}
        <h3 className='SubTitulo-detail'>Acceso a nuestro sitio web</h3>
        <p className='text__detail'>
          Cuando ingresa a nuestro sitio web, su navegador transferirá ciertos datos a nuestro servidor web. Esto se hace por razones técnicas y se requiere 
          para poner a su disposición la información solicitada. Para facilitar su acceso a la página, se recopilan, almacenan y utilizan brevemente 
          los siguientes datos: <br />
            <li style={{paddingLeft:'1rem', marginTop:'0.5rem'}}> •	Dirección IP </li>
            <li style={{paddingLeft:'1rem', marginTop:'0.5rem'}}> •	Fecha y hora de acceso </li>
            <li style={{paddingLeft:'1rem', marginTop:'0.5rem'}}> •	Diferencia de zona horaria a la hora del meridiano de Greenwich (GMT) </li>
            <li style={{paddingLeft:'1rem', marginTop:'0.5rem'}}> •	Contenido de la solicitud (sitio específico)</li>
            <li style={{paddingLeft:'1rem', marginTop:'0.5rem'}}> •	Estado del acceso/código de estado HTTP </li>
            <li style={{paddingLeft:'1rem', marginTop:'0.5rem'}}> •	Volumen transferido de datos </li>
            <li style={{paddingLeft:'1rem', marginTop:'0.5rem'}}> •	Sitio web que solicita acceso </li>
            <li style={{paddingLeft:'1rem', marginTop:'0.5rem'}}> •	Navegador, configuración de idioma, versión del Sistema operativo del navegador y resolución de pantalla </li><br />

          Al mismo tiempo, para proteger nuestros intereses legítimos, almacenaremos dichos datos durante un período de tiempo limitado a fin de poder
          iniciar un seguimiento de los datos personales, en caso de que haya un acceso o intento de acceso no autorizado a nuestros servidores. 
        </p><br />


        {/* Registro  */}
        <h3 className='SubTitulo-detail'>Registro </h3>
        <p className='text__detail'>
        Con el fin de poder participar en el concurso Mazorca de Oro debe registrarse con nosotros. Para este registro y el posterior 
        aviso de los ganadores del concurso, recopilamos la siguiente información sobre usted:<br />

            <li style={{paddingLeft:'1rem', marginTop:'0.5rem'}}> •	Nombre y apellidos </li>
            <li style={{paddingLeft:'1rem', marginTop:'0.5rem'}}> •	Datos de contacto (correo electrónico o número de teléfono) </li> <br />

            Tratamos estos datos personales con el fin de confirmar su participación en el concurso. Sus datos serán eliminados posterior a la finalización del concurso.
        </p><br />


        {/* Servicios externos o contenido en nuestro sitio web  */}
        <h3 className='SubTitulo-detail'>Servicios externos o contenido en nuestro sitio web </h3>
        <p className='text__detail'>
        Incluimos servicios y/o contenido de terceros en nuestro sitio web. Cuando utiliza dichos servicios de terceros o cuando se muestra contenido de terceros, los datos de 
        comunicación se intercambian entre usted y el proveedor respectivo por razones técnicas. <br /><br />

        El proveedor servicios respectivo o del contenido también puede procesar sus datos para fines adicionales propios. A nuestro saber y entender, configuramos los servicios
        y el contenido de los proveedores que tratan datos para fines propios, de tal forma que cualquier comunicación para fines distintos de presentar sus servicios o 
        contenido en nuestra página está bloqueada, o la comunicación solo se lleva a cabo una vez que haya optado activamente por usar el servicio respectivo. Sin embargo, dado que 
        no tenemos control sobre los datos recopilados y tratados por terceros, no estamos en condiciones de proporcionar información vinculante sobre el alcance y la finalidad de 
        dicho tratamiento de sus datos. <br /><br />
        
        Para obtener más información sobre el alcance y el objeto de dicha recopilación y tratamiento de sus datos, consulte las políticas de privacidad de los proveedores cuyos 
        servicios y/o contenido incluimos y que son responsables de la protección de sus datos en este contexto:<br /><br />

            <li style={{paddingLeft:'1rem', marginTop:'0.5rem'}}> Botón de redirección a página web Casagri </li>

        </p><br />

        {/* Transferencia para el proceso encargado de datos  */}
        <h3 className='SubTitulo-detail'>Transferencia para el proceso encargado de datos </h3>
        <p className='text__detail'>
        Para el tratamiento de sus datos personales utilizaremos, hasta cierto punto, proveedores de servicio especializados. Dichos proveedores de servicio son cuidadosamente 
        seleccionados y supervisados regularmente por nosotros. Sobre la base de los respectivos acuerdos de procesamiento de datos, solo procesarán los datos personales bajo 
        nuestras instrucciones y estrictamente de acuerdo con nuestras directivas.
        </p><br />


        {/* Tratamiento de datos personales fuera de su país de residencia */}
        <h3 className='SubTitulo-detail'>Tratamiento de datos personales fuera de su país de residencia </h3>
        <p className='text__detail'>
        Sus datos personales también se tratarán fuera de su país de residencia, o en otras partes del mundo que pueden tener un nivel de protección de datos inferior al de su país 
        de residencia. En tales casos, nos aseguraremos de que se proporcione un nivel de protección suficiente para sus datos personales, por ejemplo, mediante la celebración de 
        acuerdos específicos con nuestros socios contractuales (copia disponible a petición), o solicitaremos su consentimiento explícito para dicho tratamiento.
        </p><br />


        {/* Información sobre sus derechos */}
        <h3 className='SubTitulo-detail'>Información sobre sus derechos </h3>
        <p className='text__detail'>
        En general, se dispone de los siguientes derechos, de acuerdo con las leyes de protección de datos aplicables:<br />

            <li style={{paddingLeft:'1rem', marginTop:'0.5rem'}}> •	Derecho de acceso a la información sobre sus datos personales almacenados por nosotros. </li>
            <li style={{paddingLeft:'1rem', marginTop:'0.5rem'}}> •	Derecho a solicitar la consulta, corrección, actualización, eliminación o tratamiento restringido de sus datos personales, salvo que exista una razón legal o de interés público que lo impida. </li>
            <li style={{paddingLeft:'1rem', marginTop:'0.5rem'}}> •	Derecho a oponerse a un tratamiento derivado de nuestro propio interés legítimo, interés público o elaboración de perfiles, a menos de que podamos demostrar que existen razones convincentes y justificadas que sobrepasen sus intereses, derechos y libertades, o que dicho tratamiento se realiza para la reivindicación, el ejercicio o la defensa de reclamaciones legales.</li>
            <li style={{paddingLeft:'1rem', marginTop:'0.5rem'}}> •	Derecho a la portabilidad de los datos, en aquellos países que se permita.</li>
            <li style={{paddingLeft:'1rem', marginTop:'0.5rem'}}> •	Derecho a presentar una queja / denuncia ante una autoridad local de protección de datos, en caso de existir. </li>
            <li style={{paddingLeft:'1rem', marginTop:'0.5rem'}}> •	Usted puede, en cualquier momento y con efecto futuro, retirar su consentimiento para la recolección, tratamiento y uso de sus datos personales. </li>

        </p><br />


        {/* Contacto */}
        <h3 className='SubTitulo-detail'>Contacto </h3>
        <p className='text__detail'>
        Para cualquier pregunta que pueda tener con respecto a la privacidad de los datos, 
        envíe su solicitud a nuestro correo electrónico:  Mercadeo@casagri-group.com o directamente en nuestras oficinas:<br />
        Barquisimeto, Venezuela. Av. Libertador entre calles 17 y 18 Zona Industrial I

        </p><br />


        {/* Modificaciones a la Política de Privacidad */}
        <h3 className='SubTitulo-detail'>Modificaciones a la Política de Privacidad </h3>
        <p className='text__detail'>
        Última actualización:  22 de setiembre de 2023
        </p><br /><br />

      </div>
      
    </div>  
  </>
  );
}

export default DetallesConcurso;