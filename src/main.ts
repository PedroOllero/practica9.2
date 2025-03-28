import { ValidacionClave } from "./modal";

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  let minusculas: string = "qwertyuiopasdfghjklzxcvbnm";
  let mayusculas: string = "QWERTYUIOPASDFGHJKLZXCVBNM";
  let contraseñaArray: string[] = clave.split("");

  const hayCoincidenciaMinus = contraseñaArray.some((item) =>
    minusculas.includes(item)
  );
  const hayCoincidenciaMayus = contraseñaArray.some((item) =>
    mayusculas.includes(item)
  );

  if (hayCoincidenciaMayus === true && hayCoincidenciaMinus === true) {
    return {
      esValida: true,
    };
  }
  if (hayCoincidenciaMayus === false && hayCoincidenciaMinus === false) {
    return {
      esValida: false,
      error:
        "La contraseña debe contener al menos una mayuscula y una minuscula",
    };
  }
  if (hayCoincidenciaMayus === true && hayCoincidenciaMinus === false) {
    return {
      esValida: false,
      error: "No contiene al menos una minuscula",
    };
  }
  if (hayCoincidenciaMayus === false && hayCoincidenciaMinus === true) {
    return {
      esValida: false,
      error: "No contiene al menos una mayuscula",
    };
  }

  return {
    esValida: false,
    error: "Contraseña incorrecta",
  };
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  let numeros: string = "0123456789";
  let contraseñaArray: string[] = clave.split("");
  const hayNumeros = contraseñaArray.some((item) => numeros.includes(item));
  if (hayNumeros === true) {
    return {
      esValida: true,
    };
  }else{
    return {
        esValida: false,
        error: "La contraseña debe contener al menos un numero",
      };
  }
};
