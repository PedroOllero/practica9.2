import { commonPasswords } from "./const";
import { tieneCaracteresEspeciales, tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from "./main";

describe("tieneMayusculasYMinusculas", () => {
  it("caso1", () => {
    // Arrange
    let contraseña = "asdjakAKA"
    // Act
    let comprobacion = tieneMayusculasYMinusculas(contraseña)
    let resultado = {
      esValida: true,
    }
    // Assert
    expect(comprobacion).toStrictEqual(resultado);
  });
  it("caso2", () => {
    // Arrange
    let contraseña = "asdf"
    // Act
    let comprobacion = tieneMayusculasYMinusculas(contraseña)
    let resultado = {
      esValida: false,
      error: "No contiene al menos una mayuscula"
    }
    // Assert
    expect(comprobacion).toStrictEqual(resultado);
  });
  it("caso3", () => {
    // Arrange
    let contraseña = "1843"
    // Act
    let comprobacion = tieneMayusculasYMinusculas(contraseña)
    let resultado = {
      esValida: false,
      error: "La contraseña debe contener al menos una mayuscula y una minuscula"
    }
    // Assert
    expect(comprobacion).toStrictEqual(resultado);
  });
  it("caso4", () => {
    // Arrange
    let contraseña = "KLOE"
    // Act
    let comprobacion = tieneMayusculasYMinusculas(contraseña)
    let resultado = {
      esValida: false,
      error: "No contiene al menos una minuscula"
    }
    // Assert
    expect(comprobacion).toStrictEqual(resultado);
  });
});

describe("tieneNumeros", () => {
  it("caso1", () => {
    // Arrange
    let contraseña = "asdjakAKA123"
    // Act
    let comprobacion = tieneNumeros(contraseña)
    let resultado = {
      esValida: true,
    }
    // Assert
    expect(comprobacion).toStrictEqual(resultado);
  });
  it("caso2", () => {
    // Arrange
    let contraseña = "asdf"
    // Act
    let comprobacion = tieneNumeros(contraseña)
    let resultado = {
      esValida: false,
      error: "La contraseña debe contener al menos un numero"
    }
    // Assert
    expect(comprobacion).toStrictEqual(resultado);
  });
});

describe("tieneCaracterEspeciales", () => {
  it("caso1", () => {
    // Arrange
    let contraseña = "jasdkj@"
    // Act
    let comprobacion = tieneCaracteresEspeciales(contraseña)
    let resultado = {
      esValida: true,
    }
    // Assert
    expect(comprobacion).toStrictEqual(resultado);
  });
  it("caso2", () => {
    // Arrange
    let contraseña = "asdf"
    // Act
    let comprobacion = tieneCaracteresEspeciales(contraseña)
    let resultado = {
      esValida: false,
      error: "La contraseña debe contener al menos un caracter especial"
    }
    // Assert
    expect(comprobacion).toStrictEqual(resultado);
  });
});

describe("tieneLongitudMinima", () => {
  it("caso1", () => {
    // Arrange
    let contraseña = "jas123qweqw"
    // Act
    let comprobacion = tieneLongitudMinima(contraseña)
    let resultado = {
      esValida: true,
    }
    // Assert
    expect(comprobacion).toStrictEqual(resultado);
  });
  it("caso2", () => {
    // Arrange
    let contraseña = "asdf"
    // Act
    let comprobacion = tieneLongitudMinima(contraseña)
    let resultado = {
      esValida: false,
      error: "La contraseña debe contener al menos 8 caracteres"
    }
    // Assert
    expect(comprobacion).toStrictEqual(resultado);
  });
});

describe("tienePalabrasComunes", () => {
  it("caso1", () => {
    // Arrange
    let contraseña = "monkey"
    // Act
    let comprobacion = tienePalabrasComunes(contraseña, commonPasswords)
    let resultado = {
      esValida: false,
      error: "La contraseña no puede ser tan facil",
    }
    // Assert
    expect(comprobacion).toStrictEqual(resultado);
  });
  it("caso2", () => {
    // Arrange
    let contraseña = "asdfasfd"
    // Act
    let comprobacion = tienePalabrasComunes(contraseña, commonPasswords)
    let resultado = {
      esValida: true,
    }
    // Assert
    expect(comprobacion).toStrictEqual(resultado);
  });
});

describe("tieneNombreUsuario", () => {
  it("caso1", () => {
    // Arrange
    let nombre = "pedro"
    let contraseña = "123pedro"
    // Act
    let comprobacion = tieneNombreUsuario(nombre, contraseña)
    let resultado = {
      esValida: false,
      error: "La contraseña no puede contener el nombre",
    }
    // Assert
    expect(comprobacion).toStrictEqual(resultado);
  });
  it("caso2", () => {
    // Arrange
    let nombre = "pedro"
    let contraseña = "1313qweqe"
    // Act
    let comprobacion = tieneNombreUsuario(nombre, contraseña)
    let resultado = {
      esValida: true,
    }
    // Assert
    expect(comprobacion).toStrictEqual(resultado);
  });
});