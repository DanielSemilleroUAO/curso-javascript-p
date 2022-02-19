console.log("aplicación");

const personas = [new Persona("Daniel", "Delgado")];

function mostrarPersonas() {
  console.log("Mostrar personas");
  let texto = "";
  for (let persona of personas) {
    console.log(persona);
    texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
  }
  document.getElementById("personas").innerHTML = texto;
}

function agregarPersona() {
  console.log("agregar persona");
  const forma = document.forms["forma"];
  let nombre = forma["nombre"];
  let apellido = forma["apellido"];

  if (nombre.value != "" && apellido.value != "") {
    personas.push(new Persona(nombre.value, apellido.value));
  }

  mostrarPersonas();
}
