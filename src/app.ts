// alias type with union.
type MixNumString = number | string;

function combineHandler(num1: MixNumString, num2: MixNumString) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return +num1 + +num2;
  }
  return num1.toString() + num2.toString();
}

console.log("add -> add", combineHandler(2, 5));

function add(num1: number, num2: number): number {
  return num1 + num2;
}

// FUNCTION types
// default type any
// let combineValues;

let combineValues: (a: number, b: number) => number;

combineValues = add;

// complains because function types don't match
// combineValues = combineHandler

// UNKNOWN
let userInput: unknown;
let userName: string;

userInput = 3;
userInput = "value";

// error because can't assign type unknown to a string
// userName = userInput;

// use a conditional type check to assign to string
if (typeof userInput === "string") {
  userName = userInput;
}
