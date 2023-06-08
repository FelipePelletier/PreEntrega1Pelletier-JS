let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos: "));

function ingresarAlumnos() {
  return cantidadAlumnos;
}

for (let i = 0; i < cantidadAlumnos; i++) {
  let nombreAlumno = prompt("Ingrese el nombre del alumno " + (i + 1) + ":");
  let nota1 = parseFloat(
    prompt("Ingrese la primer nota del alumno " + (i + 1) + ":")
  );
  let nota2 = parseFloat(
    prompt("Ingrese la segunda nota del alumno " + (i + 1) + ":")
  );

  let promedioNotas = (nota1 + nota2) / 2;

  if (promedioNotas >= 5) {
    alert(nombreAlumno + " esta aprobado con un promedio de " + promedioNotas);
  } else {
    alert(
      nombreAlumno + " esta desaprobado con un promedio de " + promedioNotas
    );
  }
}
