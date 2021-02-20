import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {

    /**
     * 'done' es un callback que permite notificar a jest que
     * ya no estamos esperando más datos asíncronos, es decir,
     * que la prueba ya terminó. Esto se utiliza en el caso
     * de pruebas con tareas asíncronas.
     */
    
    test('getHeroeByIdAsync debe retornar un héroe async', (done) => {
        const id = 1;
        
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });
    });

    test('Debe obtener un error si el héroe por ID no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
});