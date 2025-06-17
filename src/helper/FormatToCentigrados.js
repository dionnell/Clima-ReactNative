export const FormatToCentigrados = (temperatura) => {
    const kelvin = 273.15
    const Centigrados = parseInt(temperatura - kelvin)

    return Centigrados
} 