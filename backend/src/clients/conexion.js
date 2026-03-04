const API_URL = "https://api.workoutapi.com/exercises";
const API_KEY =
  "06b0ec381689c83cb58afc44abfe4a4ddb3153b974aa0299b7ea51cc137cd1b2";

async function getAll() {
  let response = await fetch(API_URL, { headers: { "x-api-key": API_KEY } });
  console.log("Antes de transformar");
  console.log(response);
  if (!response.ok) throw new Error("Error en la lectura de la API");
  let data = await response.json();
  console.log("Despues de transformar");
  return data;
}
module.exports = { getAll };
