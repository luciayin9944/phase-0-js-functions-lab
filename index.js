function calculateTax(amount){
    let tax = amount * 0.10;
    return tax;
}

function convertToUpperCase(text){
    return text.toUpperCase();
}

function findMaximum(num1, num2){
    return Math.max(num1, num2);
}

function isPalindrome(word){
    let lowWord = word.toLowerCase();
    let reverseWord = lowWord.split('').reverse().join('');
    if (lowWord === reverseWord){
        return true;
    } else {
        return false;
    }

}

function calculateDiscountedPrice(originalPrice, discountPercentage){
    let price = originalPrice * (100 - discountPercentage)/100
    return price
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };