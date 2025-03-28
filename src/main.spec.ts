import { tieneMayusculasYMinusculas, tieneNumeros } from "./main";

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
