
import { helloHuman, helloYou, repeatHelloYou, helloWorld} from './hello-funcs';
import { Human } from './types';

const message = helloWorld();
console.log(message);


// Appel à helloYou avec le paramètre "John"
//const name = helloYou("John");
// Afficher le message dans le terminal
//console.log(name);


// Création d'un objet johnDoe de type Human
const johnDoe: Human = {
  firstname: "John",
  lastname: "Doe",
  birthyear: 1980
};

// Appel de la fonction helloHuman avec l'objet johnDoe
//const mes = helloHuman(johnDoe);
//console.log(mes);


// Appel de repeatHelloYou avec "John" répété 5 fois
//const repeatedMessage = repeatHelloYou(5, "John");
//console.log(repeatedMessage);

// Exemples d'appels avec des valeurs incorrectes pour tester les messages d'erreur

// Tester helloYou avec un nom valide
try {
  const messageHelloYou = helloYou("John");
  console.log(messageHelloYou);
} catch (error) {
  console.error(error);
}

// Tester helloHuman avec un objet valide
try {
  const messageHelloHuman = helloHuman(johnDoe);
  console.log(messageHelloHuman);
} catch (error) {
  console.error(error);
}

// Tester repeatHelloYou avec des valeurs valides
try {
  const repeatedMessage = repeatHelloYou(5, "John");
  console.log(repeatedMessage);
} catch (error) {
  console.error(error);
}


// Exemples d'appels avec des valeurs incorrectes pour tester les messages d'erreur

// Appel avec un nom vide
try {
    const invalidHelloYou = helloYou("");
    console.log(invalidHelloYou);
  } catch (error) {
    console.error(error);
  }
  
  // Appel avec un objet human invalide
  try {
    const invalidHelloHuman = helloHuman({ firstname: "", lastname: "Doe", birthyear: 1980 });
    console.log(invalidHelloHuman);
  } catch (error) {
    console.error(error);
  }
  
  // Appel avec un nombre de répétitions invalide
  try {
    const invalidRepeatHelloYou = repeatHelloYou(-3, "John");
    console.log(invalidRepeatHelloYou);
  } catch (error) {
    console.error(error);
  }
