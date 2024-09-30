import { Human } from './types';


export function helloWorld(): string {
  return "Hello, World!";
}

export function helloYou(name: string): string {
  // Vérification du paramètre name
  if (!name || typeof name !== 'string') {
    return "Error: The name must be a non-empty string.";
  }
  return `Hello, ${name}!`;
}

export function helloHuman(human: Human): string {
  // Vérification du paramètre human
  if (!human || !human.firstname || !human.lastname || !human.birthyear) {
    return "Error: The human object must have valid firstname, lastname, and birthyear.";
  }
  
  const currentYear = new Date().getFullYear();
  const age = currentYear - human.birthyear;
  
  // Vérification de l'âge
  if (age < 0) {
    return "Error: The birth year cannot be in the future.";
  }

  return `Hello, ${human.firstname} ${human.lastname}, you are ${age} years old.`;
}

export function repeatHelloYou(n: number, name: string): string {
  // Vérification des paramètres n et name
  if (typeof n !== 'number' || n < 1) {
    return "Error: The number of repetitions must be a positive integer.";
  }
  
  if (!name || typeof name !== 'string') {
    return "Error: The name must be a non-empty string.";
  }

  let result = "";
  for (let i = 0; i < n; i++) {
    result += helloYou(name) + "\n";
  }
  return result;
}

