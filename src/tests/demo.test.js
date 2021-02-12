
describe('Pruebas en el arcihvo demo.test.js', () => {
    test('Los strings deben ser iguales', () => {
        // 1. Inicialización
        const mensaje = 'Hola mundo';
    
        // 2. Estímmulo
        const mensaje2 = `Hola mundo`;
    
        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    });
});
