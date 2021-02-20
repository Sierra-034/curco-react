import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas sobre el componente <CounterApp />', () => {
    test('Debe mostrar el componente correctamente con sus valores por defecto', () => {
        const wrapper = shallow(<CounterApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el valor inicial de 100', () => {
        const intitalCounterValue = 100;
        const wrapper = shallow(<CounterApp value={intitalCounterValue} />);

        const counterValue = parseInt(wrapper.find('h2').text());
        expect(counterValue).toBe(intitalCounterValue);
    });
});
