import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo = "Hola mundo" }) => {

    return (
        <>
            <h1>Hola mundo</h1>
            <pre>{ saludo }</pre>
            <p>Mi primera aplicación</p>
        </>
    );
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
};

export default PrimeraApp;