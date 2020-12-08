import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo }) => {

    return (
        <>
            <h1>Hola mundo</h1>
            <pre>{ saludo }</pre>
            <p>{ subtitulo }</p>
        </>
    );
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
};

PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtítulo"
}

export default PrimeraApp;