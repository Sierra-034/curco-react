import "@testing-library/jest-dom"; // Opcional para obtener ayuda del editor
import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe retornar Hola Samuel', () => {
        const nombre = "Samuel";
        const saludo = getSaludo(nombre);
        expect(saludo).toBe("Hola " + nombre);
    });

    test('getSaludo debe retornar Hola Diana si no hay argumentos la llamada', () => {
        const saludo = getSaludo();
        expect(saludo).toBe("Hola Diana");
    });
});