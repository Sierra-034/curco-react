import { getImagen } from "../../base-pruebas/11-async-await";

describe('Pruebas con async-await y fetch', () => {

    /**
     * Indicamos que la prueba es asíncrona, de tal manera
     * que debemos usar la palabra 'await' para esperar a
     * que termine la operación.
     */
    
    test('Debe retornar el url de la imagen', async () => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    });
});