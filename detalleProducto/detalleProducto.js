export default function DetalleProducto() {
    return ( 
    <> 
      <h1>PAGINA EJERCICIO 7 - DETALLE PRODUCTO</h1> <hr />
      <h3> 
        <li>Nombre </li>
       <li>Descripcion</li>
       <li>Precio</li>
       <li>SKU</li> 
       <li>Cantidad disponible</li> 
       <hr />

       <button onClick={click} type="button">Comprar</button>
      </h3>
    
      </>

    );


function click(){ 
    alert ("GRACIAS POR SU COMPRA !");
    console.log("Gracias por su Compra!");
  
}


}
    
    






  
    

  
  

   
  