const stringUrl = window.location.href;
const url = new URL(stringUrl);
const stringId = url.searchParams.get("id");
const id = parseInt(stringId);

const inputId = document.getElementById("id");
const inputMarca = document.getElementById("marca");
const inputColor = document.getElementById("color");
const inputModelo = document.getElementById("modelo");

async function buscarPorId() {
  const urlBuscar = "http://localhost:8080/api/vehiculo/id/" + id;
  const respuesta = await fetch(urlBuscar, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const vehiculo = await respuesta.json();

  inputId.value = vehiculo.id;
  inputMarca.value = vehiculo.marca;
  inputColor.value = vehiculo.color;
  inputModelo.value = vehiculo.modelo;
}

async function modificar() {
  const id = inputId.value;
  const marca = inputMarca.value;
  const color = inputColor.value;
  const modelo = inputModelo.value;

  const vehiculo = {
    id: id,
    marca: marca,
    color: color,
    modelo: modelo,
  };

  const urlModificar = "http://localhost:8080/api/vehiculo/modificar";

  const respuesta = await fetch(urlModificar, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vehiculo),
  });

  window.location.href = "index.html";
}

buscarPorId();
