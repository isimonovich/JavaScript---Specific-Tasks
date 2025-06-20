function Dog(name, breed, origin, owner, role, species, mySound, canTalk) {
  this.name = name;
  this.breed = breed;
  this.origin = origin;
  this.owner = owner;
  this.role = role;
  this.species = species;
  this.mySound = mySound;
  this.canTalk = canTalk;

  this.myGreeting = function () {
    let talkStatus = this.canTalk ? "I can talk!" : "I cannot talk.";
    return `
      <h2>Constructor Object Output:</h2>
      Hi, my name is ${this.name}, and I’m a ${this.breed} from ${this.origin}.<br>
      I belong to ${this.owner}, and I’m known for being ${this.role}.<br>
      I’m a ${this.species}.<br>
      If you heard me, I’d say: "${this.mySound}"<br>
      Can I talk? ${talkStatus}
    `;
  };
}

//Create dog objects//
let myDogConst = new Dog(
  "Danny",
  "Great Dane",
  "JoJo's Bizarre Adventure",
  "Jonathan Joestar",
  "a loyal pet who is kicked and killed by Dio Brando",
  "Dog",
  "I'm a gentle giant, but I’ll protect my family if you threaten them!",
  false
);

let bond = new Dog(
  "Bond",
  "Pyrenean Mountain Dog",
  "Spy × Family",
  "Forger family",
  "Pet of the Forger family with precognition.",
  "Dog",
  "I see the future... it is filled with treats.",
  true
);

let ein = new Dog(
  "Ein",
  "Welsh Corgi",
  "Cowboy Bebop",
  "Bebop Crew",
  "A highly intelligent dog; about the adventures of a group of bounty hunters traveling on their spaceship.",
  "Dog",
  "Woof. Just solved quantum physics.",
  true
);

//Store dogs in a lookup object//
let dogList = {
  Danny: myDogConst,
  Bond: bond,
  Ein: ein
};

//Prompt user//
let userChoice = prompt("Choose a dog to learn more about (Danny, Bond, or Ein):");

//Validate and display//
if (dogList[userChoice]) {
  let selectedDog = dogList[userChoice];

  document.write("<h2>Dog Properties:</h2>");
  for (let prop in selectedDog) {
    if (typeof selectedDog[prop] !== "function") {
      document.write(`${prop}: ${selectedDog[prop]}<br>`);
    }
  }

  document.write("<br>" + selectedDog.myGreeting());
} else {
  document.write("<h2>Error:</h2>That dog does not exist.");
}
