var alphabet = '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';


const base62Encode = (value, result) => (value == 0) ? result : base62Encode(Math.floor((value/alphabet.length)), (result+alphabet.charAt(value%alphabet.length)));

var value = 184393;

var result = '';

var result = base62Encode(value,result);

console.log(result);
