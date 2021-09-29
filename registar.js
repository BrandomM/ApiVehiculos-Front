const inputMarca = document.getElementById("marca");
const inputColor = document.getElementById("color");
const inputModelo = document.getElementById("modelo");

const url = "http://localhost:8080/api/vehiculo/registrar";

async function registrar() {
  const marca = inputMarca.value;
  const color = inputColor.value;
  const modelo = inputModelo.value;

  const vehiculo = {
    marca: marca,
    color: color,
    modelo: modelo,
  };

  const respuesta = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vehiculo),
  });

  window.location.href = "index.html";
}
