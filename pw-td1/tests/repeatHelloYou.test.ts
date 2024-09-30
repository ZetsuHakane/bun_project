// tests/repeatHelloYou.test.ts

import { repeatHelloYou } from '../src/hello-funcs';

describe('repeatHelloYou', () => {
  it('doit retourner les salutations repeter trois fois', () => {
    const result = repeatHelloYou(3, 'John');
    expect(result).toBe('Hello, John!\nHello, John!\nHello, John!\n');
  });

  it('dois retourner un message d erreur si le nombre de salutation est negative', () => {
    const result = repeatHelloYou(-2, 'John');
    expect(result).toBe('Error: le nombre de repetion doit etre positive superieur a zero');
  });

  it('le nom doit etre une chaine de caractere', () => {
    const result = repeatHelloYou(3, 123 as any); // Casting to any to simulate type error
    expect(result).toBe('Error: le nom doit etre une chaine de caractere non vide.');
  });

  it('le nom ne dois pas etre vide', () => {
    const result = repeatHelloYou(3, '');
    expect(result).toBe('Error: le nom ne dois pas etre vide.');
  });
});
