let calculadora = {
  sumar: function (a, b) {
    if (this.comprobar_num(a) && this.comprobar_num(b)) {
      return a + b;
    } else {
      return false;
    }
  },
  restar(a, b) {
    if (this.comprobar_num(a) && this.comprobar_num(b)) {
      return a - b;
    } else {
      return false;
    }
  },
  multiplicar: function (a, b) {
    if (this.comprobar_num(a) && this.comprobar_num(b)) {
      return a * b;
    } else {
      return false;
    }
  },
  dividir(a, b) {
    if (this.comprobar_num(a) && this.comprobar_num(b)) {
      return a / b;
    } else {
      return false;
    }
  },
  modulo(a, b) {
    if (this.comprobar_num(a) && this.comprobar_num(b)) {
      return a % b;
    } else {
      return false;
    }
  },
  comprobar_num(num) {
    if (isNaN(num) || !isFinite(num)) {
      window.alert("Introduce correctamente el número");
      return false;
    } else {
      return true;
    }
  },
};

const aniadir_resultado = function (mensaje) {
  div_resultados = document.getElementById("resultado");
  nuevo_div = document.createElement("div");
  nuevo_div.textContent = mensaje;
  console.log(nuevo_div);
  div_resultados.appendChild(nuevo_div);
};

const ejecutar = function () {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let opcion = document.getElementById("operacion").value;
  solucion = calculadora[opcion](num1, num2);
  if (!isFinite(solucion)) {
    window.alert("El denominador no puede ser 0");
    aniadir_resultado("El denominador no puede ser 0");
    solucion = false;
  }
  if (!(solucion === false)) {
    aniadir_resultado(
      `Resultado de ${opcion} ${num1} y  ${num2} es ${solucion}`
    );
  }
};
