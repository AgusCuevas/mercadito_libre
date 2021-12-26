import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Articulo = ({articulos}) => {

    function cantidadDeArticulos  (articulos)  {
        if (articulos.length == 0){
            return (<p>No se encuentran articulos</p>)
        }
        else{
            return (
                <div className="border border-warning"> 
                    <p></p>
                    <p>Cantidad de resultados: {articulos.length}</p>
                    <p></p>
                </div>
            )
        }
        }
    function todosLosArticulos  (articulos)  {
        if (articulos.length == 0){
            return (<p>No se encuentran articulos</p>)
        }
        else{
            return (
                articulos.map(articulo => 
                <div className="border border-warning"> 
                    <p></p>
                    <p><img class = 'fotoArticulo' src={articulo.thumbnail}/></p>
                    <p>{articulo.title}</p> 
                    <p><h6>Precio: ${articulo.price}</h6></p>
                    <p><h6>Condicion: {articulo.condition}</h6></p>
                    <p><h6> <a href = {articulo.permalink}> Comprar articulo </a> </h6></p>
                    <button type="button" class="btn btn-warning"> Agregar al carrito </button>
                    <p></p>
                    </div>))
        }
        }
    return ( 
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
            {
            articulos.length == 0
                ?
                <div>
                    <p></p>
                    No hay resultados
                    <p></p>
                </div>
                :
            <div> 
                {cantidadDeArticulos(articulos)}
                {todosLosArticulos(articulos)} 
            </div>
            }
        </div>
    </Fragment>
     );
}
export default Articulo;