import { helloYou } from '../src/hello-funcs';

describe('helloYou', () => {
  it('salutation pour le nom indique, () => {
    const result = helloYou('John');
    expect(result).toBe('Hello, John!');
  });

  it('Erreur si le nom est vide', () => {
    const result = helloYou('');
    expect(result).toBe('Error: le nom ne peut pas etre vide.');
  });

  it('le nom doit etre une chaine de caractere', () => {
    const result = helloYou(123 as any); // Casting to any to simulate type error
    expect(result).toBe('Error: le nom doit etre une chaine de caractere');
  });
});
