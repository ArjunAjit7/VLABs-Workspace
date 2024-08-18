// Function to calculate the area of a triangle
function calculateTriangleArea() {
    const base = parseFloat(prompt("Enter the base of the triangle:"));
    const height = parseFloat(prompt("Enter the height of the triangle:"));
    const area = 0.5 * base * height;
    alert(`The area of the triangle is ${area}`);
}

// Function to calculate the area of a circle
function calculateCircleArea() {
    const radius = parseFloat(prompt("Enter the radius of the circle:"));
    const area = Math.PI * Math.pow(radius, 2);
    alert(`The area of the circle is ${area}`);
}

// Function to find all the vowels in a string
function findVowels() {
    const inputString = prompt("Enter a string:");
    const vowels = inputString.match(/[aeiou]/gi);
    alert(`The vowels in the string are: ${vowels ? vowels.join(', ') : 'None'}`);
}

// Function to calculate simple interest
function calculateSimpleInterest() {
    const principal = parseFloat(prompt("Enter the principal amount:"));
    const rate = parseFloat(prompt("Enter the rate of interest:"));
    const time = parseFloat(prompt("Enter the time period in years:"));
    const simpleInterest = (principal * rate * time) / 100;
    alert(`The simple interest is ${simpleInterest}`);
}

// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function checkPrime() {
    const number = parseInt(prompt("Enter a number:"));
    const result = isPrime(number);
    alert(`${number} is ${result ? 'a prime number' : 'not a prime number'}`);
}

// Function to calculate the factorial of a number
function calculateFactorial() {
    const number = parseInt(prompt("Enter a number:"));
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    alert(`The factorial of ${number} is ${factorial}`);
}
