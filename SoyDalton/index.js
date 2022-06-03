let nombre = prompt("¡Bienvenido! ¿Cual es tu nombre?")
 
let frase = `¡Hola ${nombre}! ¿Como estas?`

const saludar = nombre => document.write(frase)

saludar(nombre)