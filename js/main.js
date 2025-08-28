function simulador() {
    const contPre = document.getElementById('pre-simulation');
    const contPost = document.getElementById('post-simulation');

    let cnombres = document.getElementById('nombres_apellidos').value.trim();
    let ctelefono = document.getElementById('telefono').value.trim();
    let cemail = document.getElementById('correo').value.trim();
    let cmonto = document.getElementById('monto_invertir').value.trim();
    let ctiempo = document.getElementById('tiempo').value;

    // ✅ Validación de campos vacíos
    if (!cnombres || !ctelefono || !cemail || !cmonto || ctiempo === "Elige una opción" || ctiempo === "") {
        alert("⚠️ Por favor llena todos los campos antes de calcular.");
        return; // Detiene la función si falta información
    }

    // Si todo está bien, muestra resultados
    contPost.classList.remove('disabled');
    contPre.classList.add('disabled');

    ///constantes que capturan los span que muestran los valores
    const mTiempo = document.getElementById('mostrarTiempo');
    const mInteres = document.getElementById('mostrarInteres');
    const mTotal = document.getElementById('mostrarTotal');
    const mGanancias = document.getElementById('mostrarGanancias');
    const mNombres = document.getElementById('mostrarNombres');
    const mCorreo = document.getElementById('mostrarCorreo');

    // variables para realizar los cálculos
    let ganancia = 0;
    let total = 0;

    switch (ctiempo) {
        case '1':
            // cálculo si el tiempo corresponde a 1 año
            ganancia = (cmonto * 0.008) * 12;
            total = parseInt(cmonto) + parseInt(ganancia);
            mInteres.textContent = '0.8%';
            mTiempo.textContent = '12 meses';
            break;

        case '2':
            // cálculo si el tiempo corresponde a 2 años
            ganancia = (cmonto * 0.013) * 24;
            total = parseInt(cmonto) + parseInt(ganancia);
            mInteres.textContent = '1.3%';
            mTiempo.textContent = '24 meses';
            break;

        case '3':
            // cálculo si el tiempo corresponde a 3 años
            ganancia = (cmonto * 0.017) * 36;
            total = parseInt(cmonto) + parseInt(ganancia);
            mInteres.textContent = '1.7%';
            mTiempo.textContent = '36 meses';
            break;
    }

    // mostramos resultados en pantalla
    mTotal.textContent = total;
    mGanancias.textContent = ganancia;
    mNombres.textContent = cnombres;
    mCorreo.textContent = cemail;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calcular').addEventListener('click', simulador);
});
