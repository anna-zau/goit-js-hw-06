const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngridients = document.querySelector("#ingredients");

const makeElementsOfList = (arr) =>
  arr.map((elem) => {
    const liElem = document.createElement("li");
    liElem.textContent = elem;
    liElem.classList.add("item");

    return liElem;
  });

const elementsOfList = makeElementsOfList(ingredients);

listOfIngridients.append(...elementsOfList);
