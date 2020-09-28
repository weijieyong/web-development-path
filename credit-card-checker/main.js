// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]; //false
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]; //false
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]; //false
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Function to check card is valid or not
const validateCred = (arr) => {
  let sum = 0;
  for (let i = arr.length - 1; i >= 0; i -= 2) {
    sum += arr[i];
  }
  for (let j = arr.length - 2; j >= 0; j -= 2) {
    if (arr[j] * 2 > 9) {
      sum += arr[j] * 2 - 9;
    } else {
      sum += arr[j] * 2;
    }
  }
  return sum % 10 === 0;
};

// To check
console.log(validateCred(invalid1));

// Function to find invalid cards
const findInvalidCards = (cards) => {
  const invalidCard = [];
  for (let i = 0; i < cards.length; i++) {
    if (!validateCred(cards[i])) {
      invalidCard.push(cards[i]);
    }
  }
  return invalidCard;
};

// Function to list invalid companies (non-repeated)
const idInvalidCardCompanies = (invalidCards) => {
  let invalidComp = [];
  for (let i = 0; i < invalidCards.length; i++) {
    if (invalidCards[i][0] === 3) {
      invalidComp.push("Amex");
    } else if (invalidCards[i][0] === 4) {
      invalidComp.push("Visa");
    } else if (invalidCards[i][0] === 5) {
      invalidComp.push("Mastercard");
    } else if (invalidCards[i][0] === 6) {
      invalidComp.push("Discover");
    } else {
      console.log("Company not found");
    }
  }
  //remove duplicates
  return (invalidComp = [...new Set(invalidComp)]);
};

//Function to convert string to array
const strToArr = (str) => {
  return str.split("");
};

// Function that will convert invalid numbers into valid numbers
// find the number after mod 10: // sum % 10
// add it to the numbers which is not multiplied by 2
// make sure the number after added must be less than 9

// To check
// const invalidBatch = findInvalidCards(batch);
// console.log(idInvalidCardCompanies(invalidBatch));
