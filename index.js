// Ciclo para combinar los tres colores primarios :D

alert("Bienvenid@, Aquí podrás jugar con los colores primarios ¡Let's Begin!")
let coloruno = prompt("Ingresa el primer color primario (amarillo, azul o rojo)")
let colordos = prompt("Ingresa el segundo color primario (amarillo, azul o rojo)")
let combinacion

if (coloruno == 'amarillo' && colordos == 'azul' || coloruno == 'azul' && colordos == 'amarillo'){
    combinacion = 'verde'
    alert('La combinacion de tus colores es: '+combinacion)
} else if (coloruno == 'amarillo' && colordos == 'rojo' || coloruno == 'rojo' && colordos == 'amarillo'){
    combinacion = 'Naranja'
    alert('La combinacion de tus colores es: '+combinacion)
} else if (coloruno == 'rojo' && colordos == 'azul' || coloruno == 'azul' && colordos == 'rojo'){
    combinacion = 'Violeta'
    alert('La combinacion de tus colores es: '+combinacion)
} else if (coloruno == colordos){
    alert('No se pueden combinar los colores')
}
alert("Gracias por usar estas combinaciones")



