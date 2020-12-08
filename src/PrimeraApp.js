import React from 'react';

const PrimeraApp = () => {

    const saludo = {
        nombre: 'Samuel',
        edad: 22
    };

    return (
        <>
            <h1>Hola mundo</h1>
            <pre>{ JSON.stringify(saludo, null, 3) }</pre>
            <p>Mi primera aplicación</p>
        </>
    );
}

export default PrimeraApp;