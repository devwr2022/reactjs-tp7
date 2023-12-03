export default function Pagina1() {
  return ( 
  <> 
    <h1>PAGINA EJERCICIO 6 - FORMULARIO</h1> <hr />
    <h4>Nombre <input name="Nombre" type="text" /> <hr />
     Apellido <input name="Apellido" type="text" /> <hr/>
    Email <input name="Email" type="email"/> <hr />
    Telefono <input name="Telefono" type="tel" /> <hr />
    Password <input name="Password" type="password"/> <hr />
     <button onClick={click} type="button">Confirmacion Password</button>
    </h4>
  </> );

function click() {return console.log("Has confirmado el password")}
  
 
}

