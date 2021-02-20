import React from 'react';
import { shallow } from 'enzyme';
// import '@testing-library/jest-dom';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
    test('Debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo = "Hola, soy Goku";
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();  
    });

    test('Debe ostrar el subtítulo enviado por props', () => {
        const saludo = "Hola, soy Goku";
        const subtitulo = "Y esto es dragon ball";
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
    });
});