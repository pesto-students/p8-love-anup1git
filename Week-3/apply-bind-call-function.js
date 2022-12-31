let p1 = {
  firstName: 'John',
  lastName: 'Smith'
};
let p2 = {
  firstName: 'Ann',
  lastName: 'Brown'
};

function sayWelcomeUsingApply(greeting) {
  console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

function sayWelcomeUsingBindFunction() {
  console.log('Welcome ' + this.firstName + ' ' + this.lastName);
}


console.log('\n')
console.log('say Welcome using Apply')
sayWelcomeUsingApply.apply(p1, ['Welcome']); // Welcome John Smith
sayWelcomeUsingApply.apply(p2, ['Welcome']); // Welcome Ann Brown


console.log('\n')
console.log('say Welcome using Bind')
let sayWelcomeJohn = sayWelcomeUsingBindFunction.bind(p1);
let sayWelcomeAnn = sayWelcomeUsingBindFunction.bind(p2);
sayWelcomeJohn(); // Welcome John Smith
sayWelcomeAnn(); // Welcome Ann Brown

console.log('\n')
console.log('say Welcome using Call')
function sayWelcomeUsingCallFunction(greeting) {
  console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}
sayWelcomeUsingCallFunction.call(p1, 'Welcome'); // Welcome John Smith
sayWelcomeUsingCallFunction.call(p2, 'Welcome'); // Welcome Ann Brown



console.log('\n')

console.log('\n')