// Exe 01.
let nome = "Alisson" 
let maiusculas = nome.toUpperCase();
console.log(nome)
console.log(maiusculas)

// Exe 02
let minusculas = nome.toLowerCase();
console.log(minusculas)

//Exe 03
function inverterString(str) {
    let arr = str.split('');
    arr.reverse();
    let stringInvertida = arr.join ('');
    return stringInvertida;
}

const minhaString = "Alisson"
const stringInvertida = inverterString (minhaString);
console.log(stringInvertida);

//Exe 04
let substituir = nome.replace ("G", "D")
let substituir1 = nome.replace ("A", "V")
let substituir2 = nome.replace ("B", "R")
let substituir3 = nome.replace ("K", "L")
let substituir4 = nome.replace ("N", "M")
let substituir5 = nome.replace ("O", "P")
let substituir6 = nome.replace ("W", "Q")
console.log(substituir)
console.log(substituir1)
console.log(substituir2)
console.log(substituir3)
console.log(substituir4)
console.log(substituir5)
console.log(substituir6)


