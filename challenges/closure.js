// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

/* Explanation: 
When the nested function logs the variable 'internal', it can't find 'internal' in it's local 'nestedFunction' scope.
In this case, the compiler will look at the above parental scopes (the scopes 'surrounding' the nested function) to find internal.
Sure enough, nestedFunction() can access the internal variable in the scope above it, myFunction().
myFunction(), however, cannot access variables inside of nestedFunction(). This is function closure.
*/

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. 
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
var count = 0;

function summation(num) {
  for (let i = num; i > 0; i--) {
    count += i;
  }
  return count;
}

console.log(summation(4));
