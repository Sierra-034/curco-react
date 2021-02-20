import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {
    test('Debe retornar un héroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);
    });

    test('Debe retornar undefined si héroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('Debe retornar un arreglo con los héroes de DC', () => {
        const owner = "DC";
        const heroesRetrieved = getHeroesByOwner(owner);
        
        const expectedHeroes = heroes.filter(h => h.owner == owner);
        expect(heroesRetrieved).toEqual(expectedHeroes);
    });

    test('Debe retornar un arreglo con los héroes de Marvel', () => {
        const owner = "Marvel";
        const lengthHeroesRetrieved = getHeroesByOwner(owner).length;

        const expectedLength = 2;
        expect(lengthHeroesRetrieved).toBe(expectedLength);
    });
});