import { ValidacionClave } from "./modal";

const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  let minusculas: string = "qwertyuiopasdfghjklzxcvbnm";
  let mayusculas: string = "QWERTYUIOPASDFGHJKLZXCVBNM";
  let contraseñaArray: string[] = clave.split("");

  const hayCoincidenciaMinus = contraseñaArray.some((item) =>
    minusculas.includes(item)
  );
  const hayCoincidenciaMayus = contraseñaArray.some((item) =>
    mayusculas.includes(item)
  );

  console.log(hayCoincidenciaMayus)
  console.log(hayCoincidenciaMinus)

  if (
    hayCoincidenciaMayus === true &&
    hayCoincidenciaMinus === true
  ) {
    return {
      esValida: true,
    };
  }
  if (
    hayCoincidenciaMayus === false &&
    hayCoincidenciaMinus === false
  ) {
    return {
      esValida: false,
      error: "La contraseña debe contener al menos una mayuscula y una minuscula"
    };
  }
  if (
    hayCoincidenciaMayus === true &&
    hayCoincidenciaMinus === false
  ) {
    return {
      esValida: false,
      error: "No contiene al menos una minuscula"
    };
  }
  if (
    hayCoincidenciaMayus === false &&
    hayCoincidenciaMinus === true
  ) {
    return {
      esValida: false,
      error: "No contiene al menos una mayuscula"
    };
  }
  
  return{
    esValida: false,
    error: "Contraseña incorrecta"
  };
};

let resultado = tieneMayusculasYMinusculas("asd")
console.log(resultado)
