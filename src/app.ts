// alias type with union.
type MixNumString = number | string;

function add(num1: MixNumString, num2: MixNumString) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return +num1 + +num2;
  }
  return num1.toString() + num2.toString();
}
console.log("add -> add", add(2, 5));
