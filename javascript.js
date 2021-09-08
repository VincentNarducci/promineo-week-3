/* 1.   Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. */
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

/* a.   Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Print the result to the console. */
let agesLength = ages.length;
let lastMinusFirst = ages[(agesLength-1)]-ages[0];
console.log("The last ages array element minus the first is: " + lastMinusFirst);

/* b.	Add a new age to your array and repeat the step above to ensure it is dynamic  */
ages.push(42);
console.log(ages);
agesLength = ages.length;
lastMinusFirst = ages[(agesLength-1)]-ages[0];
console.log("The last ages array element minus the first is: " + lastMinusFirst);

/* c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console. */
let total = 0;
let avg = 0;
for (let i = 0; i < ages.length; i++){
    avg = (total += ages[i]) / ages.length;
} 
console.log(
"The average age is: " + avg.toFixed(1)
);

/* 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’. */
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log(names);

/* a.	Use a loop to iterate through the array and calculate the average number of letters per name.
Print the result to the console */

for (let i = 0; i < names.length; i++){
    let total = 0;
    let avg = 0;
    avg = (total += names[i].length) / names.length;
}
console.log("The average # of letters per name is: " + avg.toFixed(1));

/* b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces,
and print the result to the console. */
let firstName = "";
for (let i = 0; i < names.length-1; i++){
    firstName += names[i] + " ";
}
/* leave out last name from the loop and add it to the end so we don't have a space after the last name */
console.log(firstName + names[names.length-1]);

/* 3.	How do you access the last element of any array? */
console.log("The last element of any array can be accessed using 'arr[arr.length-1]'")
console.log("Example: " +names[names.length-1]);

/* 4.	How do you access the first element of any array? */
console.log("The first element of any array can be accessed using 'arr[0]'")
console.log("Example: " +names[0]);


/* 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array
and add the length of each name to the nameLengths array. */
let nameLengths = [];
let letterCount = 0;
for (let i = 0; i < names.length; i++){
    letterCount = names[i].length;
    nameLengths.push(letterCount);
 }
console.log(nameLengths);

/* this is using the map method to accomplish the above  */
/* let nameLengths = names.map(function(element){
    return element.length;
});
console.log(nameLengths); */

/* 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
Print the result to the console. */
let letterSum = 0;
for (let i = 0; i < nameLengths.length; i++){
    letterSum += nameLengths[i];
}
console.log("The sum of the elements of the nameLengths array is: " + letterSum);

/* 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’). */
function stringRepeat(word, n){
    let s = "";
    for (let i = 0; i < n; i++){
       s += word;
    }
    return console.log(s);
}
stringRepeat("Hello",3);

/* 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name
(the full name should be the first and the last name separated by a space). */
function fullName(firstName, lastName){
    return console.log(firstName + " " + lastName);
}

fullName("Rick", "James");

/* 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers
in the array is greater than 100. */
function moreThan100(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    if (sum > 100){
        return console.log(true + " because the average of the array is greater than 100");
    } return console.log(false + " because the average of the array is less than or equal to 100");
}

moreThan100([5, 10, 15, 20, 25, 30]);

/* 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array. */
function avgArrayElements(arr){
    let total = 0;
    let avg = 0;
    for (let i = 0; i < arr.length; i++){
        avg = (total += arr[i]) / arr.length;
    }
    return console.log("The average of the array elements is: " + avg);
}

avgArrayElements([20, 40, 60, 80, 100]);

/* 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements
in the first array is greater than the average of the elements in the second array. */
function isArrayAvgGreater(arr1, arr2){
    let tot1 = 0;
    let avg1 = 0;
    let tot2 = 0;
    let avg2 = 0;
    for (let i = 0; i < arr1.length; i++){
        avg1 = (tot1 += arr1[i]) / arr1.length;
    }
    for (let i = 0; i < arr2.length; i++){
        avg2 = (tot2 += arr2[i]) / arr2.length;
    }
    if (avg1 > avg2){
        return console.log(true + " because the average of the first array is greater than the second");
    } return console.log(false + " because the average of the first array is less than or equal to the second");
}

isArrayAvgGreater([10, 20, 30, 40], [5, 10, 15, 20]);

/* 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,
and returns true if it is hot outside and if moneyInPocket is greater than 10.50. */

function willByDrink(isHotOutside, moneyInPocket){
    if (isHotOutside === true && moneyInPocket > 10.50){
        return console.log(true + " because it's hot and I'm rich");
        } return console.log(false + " because it's either not hot or I don't have enough money");
    }

willByDrink(true, 50);

/* 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it. */

/* this function flips a coin by generating a random number between 0 and 1 using the js Math.random function (inclusive of 0 but not 1)
the outcome of the flip is determined by whether or not the random number is greater than .5 */
function coinFlip(){
    let randomNum = Math.random();
    if (randomNum >= 0 && randomNum < .5){
    return console.log("Heads");
    } return console.log("Tails");
}
coinFlip();
