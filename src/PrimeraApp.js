import React from 'react';

const PrimeraApp = ({ saludo = "Hola mundo" }) => {

    return (
        <>
            <h1>Hola mundo</h1>
            <pre>{ saludo }</pre>
            <p>Mi primera aplicación</p>
        </>
    );
}

export default PrimeraApp;