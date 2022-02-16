let x = 5;
//variable x is declared and assigned value 5.

let y = 3;
//variable y is declared and assigned value 3.

// addition.
console.log('x + y = ', x + y);  //addition of variables x and y.
//value 8 is returned.

// subtraction.
console.log('x - y = ', x - y);  //subtraction of variable y from variable x.
//value returned is 2.

//multiplication.
console.log('x * y = ', x * y);  //multiplication of variables x and y.
//value returned is 15.

// division.
console.log('x / y = ', x / y);  //division of variable x by variable y.
//value returned is 1.6666666666666667.

// modulus operation.
console.log('x % y = ', x % y);   //variable x is divided by variable y.
// remainder (obtained after division) is returned.
//value returned is 2.

// increment.
console.log('++x = ', ++x); //returns the value of x after incrementing it.
//value returned is 6, variable x now has a new value 6.

console.log('x++ = ', x++); //returns the value of x before incrementing it
//original value is returned first in this case the value is 6.

console.log('x = ', x);  // now that variable x is called, it will return value 7.
// this new value is as a result of increment x++.
// new value of x is 7.

//decrement.
console.log('--x = ', --x); //returns the value of x after decrementing it.
//value returned is 6, variable x now has a new value 6.

console.log('x-- = ', x--); //returns the value of x before decrementing it.
//original value is returned first in this case the value is 6.

console.log('x = ', x);   //now that variable x is called, it will return value 5.
// this new value is as a result of decrement x--.

//exponent
console.log('x ** y =', x ** y); // variable x is raised to the power y.
// value returned is 125.

//equal operator
console.log(2 == 2); //since 2 is equal to 2, this returns true.

console.log(2 == '2'); // the number 2 on the right of == is equal in value to '2'.
// this also returns true

//not equal operator
console.log(3 != 2); // since 3 is not equal in value to 2, this returns true.

console.log('hello' != 'Hello'); // the two strings are not equal since the first letters differ from each other.
// this returns true.
// JavaScript is a case- sensitive language.

//strict equal to operator.
console.log(2 === 2); //2 is equal to 2 both in value and data type.
//this returns true.

console.log(2 === '2'); // 2 is equal to '2' in value but they are of different data types.
//this returns false.

//strict not equal to operator.
console.log(2 !== '2'); // 2 is equal to '2' in value but they are of different data types hence not strict equal.
//this returns false.

console.log(2 !== 2); // 2 is equal to 2 both in value and data type, thus are strict equal.
//this returns false.