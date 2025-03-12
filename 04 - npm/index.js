// Codigo para executar meu projeto

// Importar um modulo 
import {calcularIMC, tabelaIMC} from "./CalculadoraIMC.js"

console.log(">>>Calculadora IMC<<<")
console.table(tabelaIMC)

const peso = 70
const altura = 1.75

const resultado = calcularIMC(peso, altura)

console.log ("Resultado IMC:")
console.log(resultado.toFixed(2))

// Importar um modulo externo, uma biblioteca
import moment from "moment"

const hoje = moment ().locale('pt-br')

console.log("Data:")
console.log(hoje.format("DD/MM/YYYY"))
