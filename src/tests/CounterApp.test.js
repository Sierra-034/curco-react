import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas sobre el componente <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);
    
    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });
    
    test('Debe mostrar el componente correctamente con sus valores por defecto', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el valor inicial de 100', () => {
        const intitalCounterValue = 100;
        const wrapper = shallow(<CounterApp value={intitalCounterValue} />);

        const counterValue = parseInt(wrapper.find('h2').text());
        expect(counterValue).toBe(intitalCounterValue);
    });

    test('Debe incrementar con el botón +1', () => {
        wrapper.find('button').at(0).simulate('click'); // Se puede mandar información del evento con un segundo argumento de tipo objeto
        const counterText = wrapper.find('h2').text();
        expect(counterText).toBe('11');
    });

    test('Debe decrementar con el botón -1', () => {
        wrapper.find('button').at(2).simulate('click'); // Se puede mandar información del evento con un segundo argumento de tipo objeto
        const counterText = wrapper.find('h2').text();
        expect(counterText).toBe('9');
    });

    test('Debe reiniciar el contador al valor por defecto', () => {
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click'); // Click onReset
        let counterValue = wrapper.find('h2').text();
        
        expect(counterValue).toBe('10');
        
        wrapper = shallow(<CounterApp value={25} />);
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click'); // Click onReset
        counterValue = wrapper.find('h2').text();
        
        expect(counterValue).toBe('25');
    });
});
