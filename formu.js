const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input"); //seleccionar todos los inputs del form
const selectage = document.querySelectorAll("#formulario select");
const campos = {
  usuario: false,
  nombre: false,
  password: false,
  correo: false,
  telefono: false,
  dni: false,
  age: false,
  ciudad: false, //si un campo esta valido o no
};
const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  dni: /(^([0-9]{8,8}\-[A-Z])|^)$/, //El DNI debe de estar formado por 8 caracteres que estén entre el 0 y el 9, seguidos por un guión "-" y acabados con una letra mayúscula.
};
const validarFormulario = (e) => {
  //console.log(e.target.name);// muestra en la consola el nombre del campo que he escrito
  switch (
    e.target.name //lo que quiero comprobar
  ) {
    case "usuario":
      validarCampo(expresiones.usuario, e.target, "usuario");
      break;
    case "nombre":
      validarCampo(expresiones.nombre, e.target, "nombre");
      break;
    case "password":
      validarCampo(expresiones.password, e.target, "password");
      validarPassword2();
      break;
    case "password2":
      validarPassword2();
      break;
    case "correo":
      validarMail(expresiones.correo, e.target, "correo");
      break;
    case "telefono":
      validarCampo(expresiones.telefono, e.target, "telefono");
      break;
    case "dni":
      validarDni(expresiones.dni, e.target, "dni");
      break;
    case "edade":
      validateAge();
      break;
  }
};
const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__${campo}`)
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.remove("fa-times-circle"); //quitar o añadir clase que pone check
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.add("fa-check-circle");
    document
      .querySelector(`#grupo__${campo} .formulario__input-error`)
      .classList.remove("formulario__input-error-activo");
    campos["${campo}"] = true;
  } else {
    document
      .getElementById(`grupo__${campo}`)
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__${campo}`)
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.add("fa-times-circle"); //quitar o añadir clase que pone check
    document
      .querySelector("#grupo__usuario i")
      .classList.remove("fa-check-circle");
    document
      .querySelector("#grupo__usuario .formulario__input-error")
      .classList.add("formulario__input-error-activo");
    campos["usuario"] = false;
  }
};
const validarPassword2 = () => {
  const inputPassword1 = document.getElementById("password");
  const inputPassword2 = document.getElementById("password2");

  if (inputPassword1.value !== inputPassword2.value) {
    document
      .getElementById("grupo__password2")
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__password2")
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector("#grupo__password2 i")
      .classList.add("fa-times-circle"); //quitar o añadir clase que pone check
    document
      .querySelector("#grupo__password2 i")
      .classList.remove("fa-check-circle");
    document
      .querySelector("#grupo__password2 .formulario__input-error")
      .classList.add("formulario__input-error-activo");
    campos["password"] = false;
  } else {
    document
      .getElementById("grupo__password2")
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__password2")
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector("#grupo__password2 i")
      .classList.remove("fa-times-circle"); //quitar o añadir clase que pone check
    document
      .querySelector("#grupo__password2 i")
      .classList.add("fa-check-circle");
    document
      .querySelector("#grupo__password2 .formulario__input-error")
      .classList.remove("formulario__input-error-activo");
    campos["password"] = true;
  }
};

const validarMail = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById("grupo__correo")
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__correo")
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector("#grupo__correo i")
      .classList.remove("fa-times-circle"); //quitar o añadir clase que pone check
    document.querySelector("#grupo__correo i").classList.add("fa-check-circle");
    document
      .querySelector("#grupo__correo .formulario__input-error")
      .classList.remove("formulario__input-error-activo");
    campos["correo"] = false;
  } else {
    document
      .getElementById("grupo__correo")
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__correo")
      .classList.add("formulario__grupo-correcto");
    document.querySelector("#grupo__correo i").classList.add("fa-times-circle"); //quitar o añadir clase que pone check
    document
      .querySelector("#grupo__correo i")
      .classList.remove("fa-check-circle");
    document
      .querySelector("#grupo__correo .formulario__input-error")
      .classList.add("formulario__input-error-activo");
    campos["correo"] = true;
  }
};

const validarDni = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById("grupo__dni")
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__dni")
      .classList.add("formulario__grupo-correcto");
    document.querySelector("#grupo__dni i").classList.remove("fa-times-circle"); //quitar o añadir clase que pone check
    document.querySelector("#grupo__dni i").classList.add("fa-check-circle");
    document
      .querySelector("#grupo__dni .formulario__input-error")
      .classList.remove("formulario__input-error-activo");
    campos["dni"] = false;
  } else {
    document
      .getElementById("grupo__dni")
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__dni")
      .classList.add("formulario__grupo-correcto");
    document.querySelector("#grupo__dni i").classList.add("fa-times-circle"); //quitar o añadir clase que pone check
    document.querySelector("#grupo__dni i").classList.remove("fa-check-circle");
    document
      .querySelector("#grupo__dni .formulario__input-error")
      .classList.add("formulario__input-error-activo");
    campos["dni"] = true;
  }
};
const validaEdad = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById("grupo__age")
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__age")
      .classList.add("formulario__grupo-correcto");
    document.querySelector("#grupo__dni i").classList.remove("fa-times-circle"); //quitar o añadir clase que pone check
    document.querySelector("#grupo__dni i").classList.add("fa-check-circle");
    document
      .querySelector("#grupo__dni .formulario__input-error")
      .classList.remove("formulario__input-error-activo");
    campos["age"] = false;
  } else {
    document
      .getElementById("grupo__dni")
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById("grupo__dni")
      .classList.add("formulario__grupo-correcto");
    document.querySelector("#grupo__dni i").classList.add("fa-times-circle"); //quitar o añadir clase que pone check
    document.querySelector("#grupo__dni i").classList.remove("fa-check-circle");
    document
      .querySelector("#grupo__dni .formulario__input-error")
      .classList.add("formulario__input-error-activo");
    campos["age"] = true;
  }
};

function validateSelect() {
  var select = document.getElementById("ciudad");
  if (select.value == "") {
    alert("Por favor seleccione una opción válida.");
    select.style.border = "1px solid red";
    return false;
  } else {
    select.style.border = "1px solid green";
    return true;
  }
}

function validateAge() {
  let edad = document.getElementById("age");
  if (edad.value >= 18) {
    age.style.border = "1px solid green";
    return true;
  } else {
    alert("debes sder maypor de edad");
    age.style.border = "1px solid red";
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const terminos = document.getElementById("terminos");
  if (
    campos.usuario &&
    campos.nombre &&
    campos.password &&
    campos.correo &&
    campos.telefono &&
    terminos.checked
  ) {
    formulario.reset();

    document
      .getElementById("formulario__mensaje-exito")
      .classList.add("formulario__mensaje-exito-activo");
    setTimeout(() => {
      document
        .getElementById("formulario__mensaje-exito")
        .classList.remove("formulario__mensaje-exito-activo");
    }, 5000);

    document
      .querySelectorAll(".formulario__grupo-correcto")
      .forEach((icono) => {
        icono.classList.remove("formulario__grupo-correcto");
      });
  } else {
    document
      .getElementById("formulario__mensaje")
      .classList.add("formulario__mensaje-activo");
  }
});

function submitForm() {
  validateAge();
  validateSelect();
}
/* let formElements = document.getElementById("form").elements;
for (let i = 0; i < formElements.length; i++) {
    let input = formElements[i];
    if (input.value === "") {
        alert("Por favor, completa todos los campos");
        event.preventDefault();
        return;
    }
}

let formu =formulario.elements;
for ( let i=0; i < formu.length); i++{
    let caso = formu[i]
    if( caso.value ===""){
        alert("Por favor rellena los campos");
        event.preventDefault();
         return;
    }
}
codigo del chat para validar un formulariop con un for

Recolecta los elementos del formulario en una variable, por ejemplo, utilizando "document.getElementById("form").elements"

Crea un "for" loop que recorra cada elemento del formulario

Dentro del loop, valida cada elemento utilizando condicionales (ej. "if" statements) para asegurarte de que cada campo está completo y cumple con cualquier otra validación necesaria (ej. formato de correo electrónico válido, contraseña segura, etc.)
Si algún campo no es válido, muestra un mensaje de error y detiene el envío del formulario utilizando "event.preventDefault()"
Si todos los campos son válidos, permite el envío del formulario.
*/
