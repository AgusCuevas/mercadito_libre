import React from 'react';
import './App.css';
import { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){

  const [productos, setProductos] = useState([])
  const [carrito, setCarrito] = useState([])

  const consultarAPI = async () => {
    let producto = document.getElementById('busqueda').value
    try{
      const api = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${producto}`);
      const articulos = await api.json();
      setProductos(articulos.results[0]);
      } catch (error) {
        console.log(error);
    }
  };

  function todosLosArticulos (productos)  {
    if (productos.length == 0){
        return (<p>No se encuentran articulos</p>)
    }
    else{
        return (
            <div className="border border-warning"> 
                <p></p>
                <p><img class = 'fotoArticulo' src={productos.thumbnail}/></p>
                <p>{productos.title}</p> 
                <p><h6>Precio: ${productos.price}</h6></p>
                <p><h6>Condicion: {productos.condition}</h6></p>
                <p><h6> <a href = {productos.permalink}> Comprar articulo </a> </h6></p>
                <button type="button" class="btn btn-warning" onClick={() => agregarACarrito(productos)}> Agregar al carrito </button>
                <p></p>
              </div>)
    }
    }

    const agregarACarrito = (productoAgregar) => {
      const existeProducto = carrito.find(
        (productoAgregar) => productoAgregar.title === productos.title)
        if(!existeProducto){
          const nuevoAgregado = [...carrito, productoAgregar]
          setCarrito(nuevoAgregado)
          console.log(nuevoAgregado)
        }
    }

    const eliminarDeCarrito = (productoAEliminar) =>{
      const productosRestantes = carrito.filter(
        (productoAEliminar) => productoAEliminar.title !== productos.title)
        const vacio = []
        setCarrito(vacio)
        
    }

  return (
    <div className = 'align-items-center' className="container">
      <header className = 'header'>
        <h1>Mercadito Libre</h1>
      </header>
      <nav class="navbar navbar-light bg-light" className = 'barra'>
        <form class="form-inline" className = 'formulario'>
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id = 'busqueda'/>
        <button class = 'boton' type="button" class="btn btn-warning" 
          variant="light"
          onClick={consultarAPI}
          >Buscar articulo
        </button>
        </form>
      </nav>
      <div className="row align-items-start">
        <div className="col">
          <p></p>
          <Fragment>
            <div className = 'align-items-center'  className="border border-warning" style="max-width: 18rem;" style= {
                {
                    margin: '2rem',
                    backgroundColor: '#E5E8E8' ,
                    maxWidth: "800px",
                    color: "black",
                    borderTopWidth: '3px',
                    borderRightWidth:'3px',
                    borderLeftWidth: '3px',
                    borderBottomWidth: '3px',
                } 
            }>
              Articulos
              {
                productos.length == 0
                    ?
                    <div>
                        <p></p>
                        No hay resultados
                        <p></p>
                    </div>
                    :
                <div> 
                    {todosLosArticulos(productos)} 
                </div>
              }
            </div>
          </Fragment>
        </div>
        <div className="col">
          <p></p>
            <Fragment>
              <div className = 'align-items-center'  className="border border-warning" style="max-width: 18rem;" style= {
                  {
                      margin: '2rem',
                      backgroundColor: '#E5E8E8' ,
                      maxWidth: "800px",
                      color: "black",
                      borderTopWidth: '3px',
                      borderRightWidth:'3px',
                      borderLeftWidth: '3px',
                      borderBottomWidth: '3px',
                  } 
              }>
                  Carrito
                  {
                    carrito.length == 0
                    ?
                    <div>
                        <p></p>
                        No hay resultados
                        <p></p>
                    </div>
                    :
                    carrito.map((productos) => (
                      <div className="border border-warning"> 
                      <p></p>
                      <p><img class = 'fotoArticulo' src={productos.thumbnail}/></p>
                      <p>{productos.title}</p> 
                      <p><h6>Precio: ${productos.price}</h6></p>
                      <p><h6>Condicion: {productos.condition}</h6></p>
                      <p><h6> <a href = {productos.permalink}> Comprar articulo </a> </h6></p>
                      <p></p>
                      </div>
                  ))}
                  <button type="button" class="btn btn-danger" onClick={() => eliminarDeCarrito(carrito)}> Limpiar carrito </button>
              </div>
          </Fragment>
        </div>
      </div>
    </div>
  )
}

/*
function App() {

  const [articulos, setArticulo] = useState([]);
  const consultarAPI = async () => {
    let producto = document.getElementById('busqueda').value
    try{
      const api = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${producto}`);
      const articulos = await api.json();
      setArticulo(articulos.results);
      } catch (error) {
        console.log(error);
    }
  };
  
  return (
    <div className = 'align-items-center' className="container">
      <header className = 'header'>
        <h1>Mercadito Libre</h1>
      </header>
      <nav class="navbar navbar-light bg-light" className = 'barra'>
        <form class="form-inline" className = 'formulario'>
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id = 'busqueda'/>
        <button class = 'boton' type="button" class="btn btn-warning" 
          variant="light"
          onClick={consultarAPI}
          >Buscar articulo
        </button>
        </form>
      </nav>
      <div className="row align-items-start">
        <div className="col">
          <p></p>
          <Articulo
            articulos = {articulos}
          />
        </div>
        <div className="col">
          <p></p>
            <Carrito
            />
        </div>
      </div>
    </div>
  );
}*/

export default App;
