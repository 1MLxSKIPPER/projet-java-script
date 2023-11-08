//Exercise 1:
function somme(a,b){
    return a+b;
}
console.log(somme(3,6));
console.log(somme(-2,-4));

//Exercise 2:
function mintosec(a){
    let sec = a*60;
    return sec;
}
console.log(mintosec(4));
console.log(mintosec(3));

//Exercise 3:
function increment(a){
 return a+1;
}
console.log(increment(1));
console.log(increment(4));
console.log(increment(6));

//Exercice 4:
function surface(base,haut){
    return(base*haut)/2;
}
console.log(surface(8,2));
console.log(surface(7,3));

//Exercice 5:
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("WayToLearn")); 
console.log(reverseString("Hello")); 

// Exercice 6:
function findMax(num1, num2, num3) {
    let max = num1;
    
    if (num2 > max) {
        max = num2;
    }
    
    if (num3 > max) {
        max = num3;
    }
    
    return max;
}
console.log(findMax(5, 9, 1));
console.log(findMax(2, 3, 10));

// Exercice 7:
function firstElement(arr) {
    return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement([50, 60, 70]));

// Exercice 8:
// function getURL() {
//     var url = window.location.href;
//     console.log("URL du site Web: " + url);
// }

// getURL();

//Exercide 9:
function getRemainder(dividend, divisor) {
    return dividend % divisor;
}

console.log(getRemainder(1, 3));
console.log(getRemainder(2, 4)); 
console.log(getRemainder(3, 3)); 