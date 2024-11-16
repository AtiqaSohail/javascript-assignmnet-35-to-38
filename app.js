// // ques01
// alert("Error! Please enter the valid password");
// document.write("");
// // ques2
// alert("Welcome to JS land\nHappy Coding!");
// // QUES3
// alert("welcome to js land...");
// // ques 4
// alert("Happy Coding!\n prevent this page from creating additional dialogs.");
// // ques5
// console.log("hello i can run js through my web browser's console");
// document.write("")
// ques6,7   //  
                    //  chapter35to38
                    // functions
                                    // question 1
// const date = new Date();
// document.getElementById("demo").innerHTML = date;
                                    // question02
function greetUser (firstName, lastName) {
    
       {"atiqa"} {"sohail"} ;
      
      return  ("hello") ;
    
    const fullName = `${firstName} ${lastName}`;
    const greeting = `Hello, ${fullName}!`;
    return greeting;
   alert(greeting);
};
function greetUser(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    const greeting = `Hello, ${fullName}!`;
    alert(greeting); // or return greeting; if you want to return the string instead of alerting it
  }
  greetUser ("Atiqa", "Sohail");
                                        // question03
function addTwoNumbers() {
  // Get the two numbers from the user
  const num1 = parseInt(prompt("Enter the first number: "));
  const num2 = parseInt(prompt("Enter the second number: "));
  // Add the two numbers
  const sum = num1 + num2;
  // Return the sum
  return sum;
}
// Call the function and display the Result
const Result = addTwoNumbers();
alert(`The sum of the two numbers is: ${Result}`);
                                  // question4
function calculator(num1, num2, operator) {
  // Perform the desired operation based on the operator
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = 'Error: Division by zero!';
      }
      break;
    default:
      result = 'Error: Invalid operator!';
  }

  // Return the result
  return result;
}

// Get the input elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorSelect = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');

// Add an event listener to the calculate button
calculateButton.addEventListener('click', () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operator = operatorSelect.value;

  const result = calculator(num1, num2, operator);
  resultParagraph.textContent = `The result of the operation is: ${result}`;
});
             //  question5
function square(z) {
  // Return the square of the input value
  return z * z;
}
const result = square(8);
console.log(`The square of 9 is: ${result}`); // Output: The square of 8 is: 64
//                                       question6
function factorial(n) {
  // Base case: 0! is 1
  if (n === 0) {
    return 1;
  }
  // Recursive case: n! is n times (n-1)!
  else {
    return n * factorial(n - 1);
  }
}
const rslt= factorial(5);
console.log(`The factorial of 5 is: ${rslt}`); // Output: The factorial of 5 is: 120
//                                            question7
function countFromStartToEnd(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
    document.write(i + "<br>");
  }
}
countFromStartToEnd(1, 30);
                                  // question8
function calculateHypotenuse(base, perpendicular) {
  /**
   * Outer function to calculate the hypotenuse of a right-angled triangle.
   * 
   * @param {number} base The base of the triangle.
   * @param {number} perpendicular The perpendicular of the triangle.
   * 
   * @returns {number} The hypotenuse of the triangle.
   */
  function calculateSquare(num) {
    /**
     * Inner function to calculate the square of a number.
     * 
     * @param {number} num The number to be squared.
     * 
     * @returns {number} The square of the number.
     */
    return num ** 2;
  }

  // Calculate the squares of the base and perpendicular
  const baseSquared = calculateSquare(base);
  const perpendicularSquared = calculateSquare(perpendicular);

  // Calculate the hypotenuse using the formula: hypotenuse2 = base2 + perpendicular2
  const hypotenuse = Math.sqrt(baseSquared + perpendicularSquared);

  return hypotenuse;
}
const base = 3;
const perpendicular = 4;
const hypotenuse = calculateHypotenuse(base, perpendicular);
console.log(hypotenuse); // Output: 5
                              //  chapter9
// passing arguments as value
function calculateRectanglearea() {
  /**
   * Function to calculate the area of a rectangle.
   * 
   * @returns {number} The area of the rectangle.
   */
  return 5 * 3; // Passing width and height as values
}

const area = calculateRectanglearea();
 console.log(area); // Output: 15
// passing arguments as variable 
function calculateRectangleArea(width, height) {
  /**
   * Function to calculate the area of a rectangle.
   * 
   * @param {number} width The width of the rectangle.
   * @param {number} height The height of the rectangle.
   * 
   * @returns {number} The area of the rectangle.
   */
  return width * height;
}

const width = 5;
const height = 3;
const Area = calculateRectangleArea(width, height);
console.log(Area); // Output: 15
// In the first solution, we pass the width and height as values directly in the function. 
// In the second solution, we pass the width and height as variables, which are then used to calculate the area of the rectangle.
//                               question10
function isPalindrome(str) {
  /**
   * Function to check whether a passed string is a palindrome or not.
   * 
   * @param {string} str The string to be checked.
   * 
   * @returns {boolean} True if the string is a palindrome, false otherwise.
   */
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Compare the cleaned string with its reverse
  return cleanedStr === cleanedStr.split('').reverse().join('');
}
const strn = 'madam';
const isPal = isPalindrome(strn);
console.log(isPal); // Output: true

const str2 = 'hello';
const isPal2 = isPalindrome(str2);
console.log(isPal2); // Output: false
                                        // QUESTION11
function FirstLetter(string) {
  /**
   * Function the first letter of each word in a string.
   * 
   * @param {string} string The input string.
   * 
   * @returns {string} The modified string with the first letter of each word capitalized.
   */
  return string.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}
const strng = 'the quick brown fox';
const capitalizedStrng = FirstLetter(strng);
console.log(capitalizedStrng); // Output: 'The Quick Brown Fox'
                                    // questoin 12
function findLongestWord(str) {
  /**
   * Function to find the longest word within a string.
   * 
   * @param {string} str The input string.
   * 
   * @returns {string} The longest word within the string.
   */
  const words = string.split(' ');
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}
const string = 'web development tutorial';
const longestWord = findLongestWord(string);
console.log(longestWord); // Output: 'development'
                              // question13
function countLetterOccurrences(str, letter) {
  /**
   * Function to count the number of occurrences of a specified letter within a string.
   * 
   * @param {string} str The input string.
   * @param {string} letter The letter to be counted.
   * 
   * @returns {number} The number of occurrences of the specified letter.
   */
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  }
  return count;
}
const str = 'JSResourceS.com';
const letter = '0';
const occurrences = countLetterOccurrences(str, letter);
console.log(occurrences); // Output: 0
//                             question14thegeometrizer 
/*
Create 2 functions that calculate properties of a circle, using
the definitions here.
Create a function called calcCircumference:
Pass the radius to the function.
Calculate the circumference based on the radius, and output
"The circumference is NN".
Create a function called calcArea:
Pass the radius to the function.
Calculate the area based on the radius, and output "The area
is NN".
Circumference of circle = 2πr
Area of circle = πr^2
*/

function calcCircumference(radius) {
  let circumference = 2 * Math.PI * radius;
  console.log(`The circumference is ${circumference}`);
}

function calcArea(radius) {
  let area = Math.PI * radius * radius;
  console.log(`The area is ${area}`);
}

calcCircumference(5);
calcArea(5);