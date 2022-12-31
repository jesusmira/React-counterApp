import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import { heroes } from '../../src/data/heroes'

describe('Pruebas de 08-imp-exp', () => { 

   test('getHeroeById debe de retornar un héroe por ID', () => { 
    
        const id = 1;
        const hero = getHeroeById(id);

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

   });

   test('getHeroeById debe de retornar un undefined si no existe', () => { 
    
        const id = 100;
        const hero = getHeroeById(id);

        expect( hero ).toBeFalsy();

   });

   // Tarea:
   // Debe de retornar un arreglo con los héroes de Dc
   // Length === 3
   // to Equal al arreglo filtrado

   // Debe de retornar un arreglo con los héroes de Marvel
   // Length === 2

   test('getHeroesByOwner Debe de retornar un arreglo con los héroes de DC', () => { 
      
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner);
        
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);
        // mejor esta forma porque es mas flexible que en duro
        // pueden que los datos cambien.
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner));


   });
   test('getHeroesByOwner Debe de retornar un arreglo con los héroes de Marvel', () => { 
      
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner);
        
        expect(heroes.length).toBe(2);
        
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner));


   });

});