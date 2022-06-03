let cantidad = prompt(`Indique cantidad de alumnos`);
let alumnosTotales = [];

for (let i = 0; i < cantidad; i++){
alumnosTotales[i] = [prompt(`Nombre del alumno ` + (i+1)), 0];
}

const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for (let i = 0; i < 30 ;i++) {
    for (const alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno); 
    }
}

