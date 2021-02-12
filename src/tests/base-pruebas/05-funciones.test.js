import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const userTest = {
            uid: "ABC123",
            username: "sierra-034"
        };

        const user = getUser();
        expect(user).toEqual(userTest);
    });

    test('getUser debe retornar un objeto con username específico', () => {
        const expectedUserActive = {
            uid: 'ABC567',
            username: "sierra-034"
        };

        const userToTest = getUsuarioActivo("sierra-034");
        expect(userToTest).toEqual(expectedUserActive);
    });
});