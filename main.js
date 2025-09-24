
colegio = "Juan 23";
resultado = "";
for (i = 0; i < 15; i++) {
    resultado += colegio + "<br>";
}
document.writeln(resultado);


color = "rojo";
resultado = "";
for (i = 0; i < 10; i++) {
    resultado += color + " ";
}
document.writeln(resultado);


resultado = "";
for (i = 1; i <= 39; i += 2) {
    resultado += i + ", ";
}
document.writeln(resultado.slice(0, -2)); // Eliminar la última coma


resultado = "";
for (i = 11; i <= 121; i += 11) {
    resultado += i + "-";
}
document.writeln(resultado.slice(0, -1)); 


resultado = "";
for (i = 1; i <= 10; i++) {
    resultado += "9 x " + i + " = " + (9 * i) + "<br>";
}
document.writeln(resultado);


limiteInferior = prompt("Ingresa el límite inferior:");
limiteSuperior = prompt("Ingresa el límite superior:");

limiteInferior = parseInt(limiteInferior);
limiteSuperior = parseInt(limiteSuperior);

if (limiteInferior <= limiteSuperior) {
    lista = "";
    for (i = limiteInferior; i <= limiteSuperior; i++) {
        lista += i + ", ";
    }
    document.writeln(lista.slice(0, -2)); 
} else {
    document.writeln("El límite inferior debe ser menor que el límite superior.");
}


cantidad = prompt("Ingresa la cantidad de múltiplos:");
multiplo = prompt("Ingresa el valor del múltiplo:");

cantidad = parseInt(cantidad);
multiplo = parseInt(multiplo);

resultado = "";
for (i = 1; i <= cantidad; i++) {
    resultado += (i * multiplo) + ", ";
}
document.writeln(resultado.slice(0, -2)); 

