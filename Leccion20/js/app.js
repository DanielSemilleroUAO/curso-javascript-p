const ingresos = [new Ingreso("Venta coche", 100000)];
const egresos = [
  new Egreso("Servicios públicos", 20000),
  new Egreso("Ropa", 20000),
];

const cargarApp = () => {
  cargarCabecero();
  cargarIngresos();
  cargarEgresos();
};

const totalIngresos = () => {
  let totalIngreso = 0;
  for (const ingreso of ingresos) {
    totalIngreso += ingreso.valor;
  }
  return totalIngreso;
};

const totalEgresos = () => {
  let totalEgreso = 0;
  for (const egreso of egresos) {
    totalEgreso += egreso.valor;
  }
  return totalEgreso;
};

const cargarCabecero = () => {
  let presupuesto = totalIngresos() - totalEgresos();
  let porcentajeEgreso = totalEgresos() / totalIngresos();
  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML =
    formatoPorcentaje(porcentajeEgreso);
  document.getElementById("ingresos").innerHTML = formatoMoneda(
    totalIngresos()
  );
  document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};

const formatoMoneda = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

const cargarIngresos = () => {
  let ingresosHTML = "";
  for (const ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingreso) => {
  return `
  <div class="elemento limpiarEstilos">
  <div class="elemento_descripcion">${ingreso.descripcion}</div>
  <div class="derecha limpiarEstilos">
    <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
    <div class="elemento_eliminar">
      <button class="elemento_eliminar--btn">
        <ion-icon name="close-circle-outline"
        onclick=eliminarIngreso(${ingreso.id})></ion-icon>
      </button>
    </div>
  </div>
  </div>
  </div>`;
};

const eliminarIngreso = (id) => {
  const indiceEliminar = ingresos.findIndex((ingreso) => ingreso.id === id);
  ingresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarIngresos();
};

const cargarEgresos = () => {
  let egresosHTML = "";
  for (const egreso of egresos) {
    egresosHTML += crearEgresoHTML(egreso);
  }
  document.getElementById("lista-egresos").innerHTML = egresosHTML;
};

const crearEgresoHTML = (egreso) => {
  return `
  <div class="elemento limpiarEstilos">
  <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">-${formatoMoneda(egreso.valor)}</div>
      <div class="elemento_porcentaje">${formatoPorcentaje(
        egreso.valor / totalEgresos()
      )}</div>
      <button class="elemento_eliminar--btn">
        <ion-icon name="close-circle-outline"
        onclick=eliminarEgreso(${egreso.id})></ion-icon>
      </button>
    </div>
  </div>`;
};

const eliminarEgreso = (id) => {
  const indiceEliminar = egresos.findIndex((egreso) => egreso.id === id);
  egresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarEgresos();
};

const agregarDato = () => {
  const forma = document.forms["forma"];
  const tipo = forma["tipo"].value;
  const descripcion = forma["descripcion"].value;
  const valor = forma["valor"].value;

  if (descripcion != "" && valor != "") {
    if (tipo === "ingreso") {
      ingresos.push(new Ingreso(descripcion, +valor));
    } else {
      egresos.push(new Egreso(descripcion, +valor));
    }
    cargarCabecero();
    cargarEgresos();
    cargarIngresos();
  }
};
