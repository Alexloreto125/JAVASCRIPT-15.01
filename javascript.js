class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  ageComparation(anotherUser) {
    if (this.age > anotherUser.age) {
      return `${this.firstName} è più vecchio di ${anotherUser.firstName}`;
    } else if (this.age < anotherUser.age) {
      return `${this.firstName} è più giovane di ${anotherUser.firstName}`;
    } else {
      return `${this.firstName} ha la stessa età di ${anotherUser.firstName}`;
    }
  }
}

const utente = new User(
  "Joe",
  "Dalton",
  36,
  "Penitenziario di minima sicurezza del Nevada"
);
const utente2 = new User(
  "William",
  "Dalton",
  35,
  "Penitenziario di minima sicurezza del Nevada"
);
const utente3 = new User(
  "Jack",
  "Dalton",
  35,
  "Penitenziario di minima sicurezza del Nevada"
);
const utente4 = new User(
  "Averell",
  "Dalton",
  33,
  "Penitenziario di minima sicurezza del Nevada"
);

const risultatoConfronto = utente.ageComparation(utente2);
const risultatoConfronto2 = utente.ageComparation(utente3);
const risultatoConfronto3 = utente.ageComparation(utente4);
const risultatoConfronto4 = utente2.ageComparation(utente3);
const risultatoConfronto5 = utente2.ageComparation(utente4);
const risultatoConfronto6 = utente2.ageComparation(utente);
const risultatoConfronto7 = utente3.ageComparation(utente);
const risultatoConfronto8 = utente3.ageComparation(utente2);
const risultatoConfronto9 = utente3.ageComparation(utente4);
const risultatoConfronto10 = utente4.ageComparation(utente);
const risultatoConfronto11 = utente4.ageComparation(utente2);
const risultatoConfronto12 = utente4.ageComparation(utente3);
console.log(risultatoConfronto);
console.log(risultatoConfronto2);
console.log(risultatoConfronto3);
console.log(risultatoConfronto4);
console.log(risultatoConfronto5);
console.log(risultatoConfronto6);
console.log(risultatoConfronto7);
console.log(risultatoConfronto8);
console.log(risultatoConfronto9);
console.log(risultatoConfronto10);
console.log(risultatoConfronto11);
console.log(risultatoConfronto12);

const petNameInput = document.getElementById("petName");
const ownerNameInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");

const saveButton = document.querySelector("form button");

const pets = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  sameOwner(anotherPet) {
    return this.ownerName === anotherPet.ownerName;
  }
}

const fillListWithItems = function () {
  const petListUl = document.getElementById("petList");

  petListUl.innerHTML = "";

  pets.forEach((pet) => {
    const newLi = document.createElement("li");
    newLi.textContent = `Name: ${pet.petName}, Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;

    petListUl.appendChild(newLi);
  });

  petNameInput.value = "";
  ownerNameInput.value = "";
  speciesInput.value = "";
  breedInput.value = "";
};

const formReference = document.getElementById("petForm");
formReference.addEventListener("submit", function (e) {
  e.preventDefault();

  const pet = new Pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  );

  console.log("ANIMALE DOMESTICO CREATO", pet);

  pets.push(pet);

  fillListWithItems();
});
