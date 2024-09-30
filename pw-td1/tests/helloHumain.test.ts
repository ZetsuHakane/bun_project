// tests/helloHuman.test.ts

import { helloHuman } from '../src/hello-funcs';
import { Human } from '../src/types';

describe('helloHuman', () => {
  it('retun la salutation pour le nom', () => {
    const johnDoe: Human = {
      firstname: 'John',
      lastname: 'Doe',
      birthyear: 1980,
    };
    const result = helloHuman(johnDoe);
    expect(result).toBe('Hello, John Doe, you are 44 years old.');
  });

  it('retourn une erreur si l humain n a pas de prenom', () => {
    const invalidHuman: Human = {
      firstname: '',
      lastname: 'Son',
      birthyear: 1980,
    };
    const result = helloHuman(invalidHuman);
    expect(result).toBe('Error: le nom la date ou le prenom est inccorect.');
  });

  it('la date ne peut pas depasser la date actuelle', () => {
    const invalidHuman: Human = {
      firstname: 'John',
      lastname: 'Son',
      birthyear: new Date().getFullYear() + 1,
    };
    const result = helloHuman(invalidHuman);
    expect(result).toBe('Error: la date ne peut pas depasser la date actuelle.');
  });
});
