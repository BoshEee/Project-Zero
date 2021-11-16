// console.log
function logMethod() {
    console.log('you clicked a button, Good work!')
}

// console.assert
const errorMsg = 'the # is not even';
for (let number = 2; number <= 5; number += 1) {
    console.log('the # is ' + number);
    console.assert(number % 2 === 0, { number, errorMsg});
}

// console.clear
const clearMethod = () => {
    console.clear()
}

// console.count
let user = "";

function greet() {
  console.count();
  return "hi " + user;
}

user = "bob";
user = "alice";
console.count('alice');

// console.countReset
function reset() {
    console.countReset();

}

// console.dir && console.dirxml
let profile = {
    name: 'batata',
    age: 50
}
console.dir(profile);
console.dirxml(profile);

//console.table
console.table(profile);

//console.warn && console.error
console.log('Outputting text to the console :')
console.warn('heads up! this is a warn ');
console.error('STOP! this is an ERROR ');
console.info('Let me inform you with this lovely console info that much looks like console log');

// console.group
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3");
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");

console.log('Hello minion!');

console.info('This is coding minions instagram account!');

console.warn('This might be hard');

console.error('Your did not save this posts for future ref!');