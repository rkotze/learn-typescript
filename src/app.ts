
// Explicit object type
const personA: { 
  name: string;
  age: number; 
} = {
  name: 'jones',
  age: 29
}

// Prefer to infer types
const person = {
  name: 'jones',
  age: 29,
  hobbies: ['gaming', 'golf'],
  role: [2, 'member']
}

let setHobbies: string[];
setHobbies = ['ab'];

console.log('Your code', person)

// Tuple, need to be explicit on object type

const personRole: { 
  name: string;
  age: number;
  role: [number, string]; // tuple
} = {
  name: 'jones',
  age: 29,
  role: [1, 'author']
}

// personRole.role[0] = 'ksks'; will error as its a should be a number
// personRole.role.push('abc'); no error, typescript exception
