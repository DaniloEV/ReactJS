import React, {useState, Fragment} from 'react';


//Función flecha, es la misma función normal
//Cada vez con nuevo componente
/*
1-Importar
2-Crear función
 */
const Contador = () => {
  //Logica JS, principal para los hooks

  //Primero nombre del estado, segundo un set(modicar);
  const [numero, setNumero] = useState(0); //El useState es principalmente para inicializar la constante
  //Este puede tener diferentes cosas, bool, objeto, array...



  //Retorna a la app.js, este solo retorna un solo elemento, hay dos maneras de hacerlo, con un DIV padre o un Fragment
    //El fragment sirve para que elementos como el Div que no tiene atributos, no se muestre

    //Eventos-Funciones
    //Para el evento onclick
    //Al haber un set este tira error si se hace de otra manera para editar el valor
    const aumentar = () => {
      setNumero(numero + 1)
    }

  return (
    <Fragment>
      <h3>Hola mundo {numero}</h3>
      <button onClick ={aumentar}>Aumentar</button>
    </Fragment>
  );
}

export default Contador;
//Una vez hecho todo se debe ir al App.js para realizar el import y mostrarlo
//App.js es mi componente padre