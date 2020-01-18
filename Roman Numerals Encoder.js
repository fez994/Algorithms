/*
    Link: https://www.codewars.com/kata/51b62bf6a9c58071c600001b 
    Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.
    Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 
    In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman 
    symbol in descending order: MDCLXVI.
 */

/* 
    My Solution: 
    Starting at the largest number, continue subtracting from the lookup table and appending 
	as long as the remainder is greater than the lookup value
*/

function solution(number) {
  // convert the number to a roman numeral
  var lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    },
    roman = "",
    i;
  for (i in lookup) {
    while (number >= lookup[i]) {
      roman += i;
      number -= lookup[i];
    }
  }
  return roman;
}

solution(121);

/* 
    Simplified explanation: 
    let's suppose that we want to convert the number 12
    what would happen in this case is that we start looping through the lookup, until num >= lookup[i]
    in this case the function stops at X:10 because num(12) >= 10
    At this point we append the value "X", and we subract for the initial number the value of "X" so -> 12-10 = 2 
    We repeat the process again, this time the loop stops at I:1 ,  append the value so "XI", than subract -> 2-1 = 1 
    we finish with the last step of the conversion so we get 12 -> XII 
*/
