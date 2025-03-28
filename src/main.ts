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
  } else {
    return {
      esValida: false,
      error: "La contraseña debe contener al menos un numero",
    };
  }
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  let caracteresEspeciales: string = `/[!@#$%^&*(),.?":{}|<>]/`;
  let contraseñaArray: string[] = clave.split("");
  const hayEspeciales = contraseñaArray.some((item) =>
    caracteresEspeciales.includes(item)
  );
  if (hayEspeciales === true) {
    return {
      esValida: true,
    };
  } else {
    return {
      esValida: false,
      error: "La contraseña debe contener al menos un caracter especial",
    };
  }
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  let contraseñaArray: string[] = clave.split("");
  if (contraseñaArray.length < 8) {
    return {
      esValida: false,
      error: "La contraseña debe contener al menos 8 caracteres",
    };
  } else {
    return {
      esValida: true,
    };
  }
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  const contieneNombre = clave
    .toLowerCase()
    .includes(nombreUsuario.toLowerCase());
  if (contieneNombre) {
    return {
      esValida: false,
      error: "La contraseña no puede contener el nombre",
    };
  } else {
    return {
      esValida: true,
    };
  }
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const hayEspeciales = commonPasswords.some((item) => item === clave);
  if (hayEspeciales === true) {
    return {
      esValida: false,
      error: "La contraseña no puede ser tan facil",
    };
  } else {
    return {
      esValida: true,
    };
  }
};

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  let param1 = tieneLongitudMinima(clave);
  let param2 = tieneMayusculasYMinusculas(clave);
  let param3 = tieneCaracteresEspeciales(clave);
  let param4 = tieneNumeros(clave);
  let param5 = tieneNombreUsuario(nombreUsuario, clave);
  let param6 = tienePalabrasComunes(clave, commonPasswords);

  let arrayErrores = [param1, param2, param3, param4, param5, param6];

  let hayErrores: boolean = arrayErrores.every(
    (item) => item.esValida === true
  );

  return {
    esValida: hayErrores,
  };
};
