import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carrito = ({}) => {
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
            Carrito
        </div>
    </Fragment>
     );
}
export default Carrito;