// Progression 1: create a consant "NEG_INF" with -1000000 value, and a function createPop

// Progression 2: add 3 variables: title, currIndex, check
// Progression 3: create a function "find" (inside createPop function only).

// Progression 4: return a function (can be anonymous).
'use strict'
const NEG_INF = -1000000;

const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
const itemToSearch = 9;

function createPop() {
  let currIndex = NEG_INF;

  
let check=false;
  let title = document.createElement("h3");
  document.getElementById('root').append(title);

  
  function find() {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      if (itemToSearch === arrayOfNumbers[i]) {
        currIndex = i;
        check=!check;
      } 
   }
}
return function () {
  find();
  if(check) 
    title.innerHTML =`The item is present and is at index ${currIndex};`
  else
    title.innerHTML =`The item is present and is at index ${currIndex}`;
}
}





// calling the function
let a=createPop();
a()