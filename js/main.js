let personas = [];

      function persona() {
        for (let i = 0; i < 5; i++) {
          let nombre = prompt("Introduce el nombre:");
          let apellidos = prompt("Introduce los apellidos:");
          let edad = parseInt(prompt("Introduce la edad:"));
          let persona = {nombre: nombre, apellidos: apellidos, edad: edad};
          personas.push(persona);
        }
      }

      function mostrar() {
        let tabla = document.createElement("table");
        let encabezado = document.createElement("tr");
        let th1 = document.createElement("th");
        th1.innerHTML = "Nombre";
        let th2 = document.createElement("th");
        th2.innerHTML = "Apellidos";
        let th3 = document.createElement("th");
        th3.innerHTML = "Edad";
        encabezado.appendChild(th1);
        encabezado.appendChild(th2);
        encabezado.appendChild(th3);
        tabla.appendChild(encabezado);

        for (let i = 0; i < personas.length; i++) {
          let fila = document.createElement("tr");
          let celda1 = document.createElement("td");
          celda1.innerHTML = personas[i].nombre;
          let celda2 = document.createElement("td");
          celda2.innerHTML = personas[i].apellidos;
          let celda3 = document.createElement("td");
          celda3.innerHTML = personas[i].edad;
          fila.appendChild(celda1);
          fila.appendChild(celda2);
          fila.appendChild(celda3);
          tabla.appendChild(fila);
        }
        document.getElementById("personas").innerHTML = "";
        document.getElementById("personas").appendChild(tabla);
      }