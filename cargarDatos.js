const tabla = document.getElementById("datosTabla");

const url = "http://localhost:8080/api/vehiculo/listar";

async function cargarDatos() {
  const respuesta = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const datos = await respuesta.json();

  datos.forEach((vehiculo) => {
    let fila =
      "<tr><th>" +
      vehiculo.id +
      "</th><td>" +
      vehiculo.marca +
      "</td><td>" +
      vehiculo.color +
      "</td><td>" +
      vehiculo.modelo +
      "<td><th><button onclick='eliminar("+vehiculo.id+")'>Eliminar</button><a href='modificar.html?id="+vehiculo.id+"'>Modificar</a></th></tr>";

    tabla.innerHTML += fila;
  });
}

async function eliminar(id) {
  const vehiculo = {
    id: id
  };
  const urlDelete = "http://localhost:8080/api/vehiculo/eliminar";
  const respuesta = await fetch(urlDelete, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vehiculo)
  });
  location.reload();
}

cargarDatos();
