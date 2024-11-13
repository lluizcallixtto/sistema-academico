function registrarNota(valor1, valor2) {
    if (typeof valor1 !== 'number' || typeof valor2 !== 'number') {
       throw new Error('Os valores devem ser números');
    }
    if (valor1 < 0 || valor1 > 10 || !Number.isInteger(valor1 * 10)) {
       throw new Error('Nota para 1UP é inválida');
    }
    if (valor2 < 0 || valor2 > 10 || !Number.isInteger(valor2 * 10)) {
       throw new Error('Nota para 2UP é inválida');
    }
    return 'Notas registradas com sucesso!';
}

module.exports = { registrarNota };

