function simulador() {
    const contPre = document.getElementById('pre-simulation');
    const contPost = document.getElementById('post-simulation');
    contPost.classList.remove('disabled');
    contPre.classList.add('disabled');


    let cnombres = document.getElementById('nombres_apellidos').value;
    let ctelefono = document.getElementById('telefono').value;
    let cemail = document.getElementById('correo').value;
    let cmonto = document.getElementById('monto_invertir').value;
    let ctiempo = document.getElementById('tiempo').value;

    ///constantes que capturasn los span que son etiquetyas que muestran los valores

    const mTiempo = document.getElementById('mostrarTiempo');
    const mInteres = document.getElementById('mostrarInteres');
    const mTotal = document.getElementById('mostrarTotal');
    const mGanancias = document.getElementById('mostrarGanancias');
    const mNombres = document.getElementById('mostrarNombres');
    const mCorreo = document.getElementById('mostrarCorreo');
    //variables para reallizar los calculos
    let ganancia = 0;
    let total = 0;



    switch (ctiempo) {
        case '1':
         // en este case realizaremos el calculo si e tiempo corresponde a un ano
         ganancia = (cmonto * 0.008) * 12
         total = parseInt(cmonto) + parseInt(ganancia)
         mInteres.textContent ='0.8%';
         mTiempo.textContent = '12 meses'

            break;
   
        case '2':
         // en este case realizaremos el calculo si e tiempo corresponde a 2 anos
        ganancia = (cmonto * 0.013) * 24
         total = parseInt(cmonto) + parseInt(ganancia)
        mInteres.textContent ='1.3%';
         mTiempo.textContent = '24 meses'
            break;
        case '3':
         // en este case realizaremos el calculo si e tiempo corresponde a 3 anos
        ganancia = (cmonto * 0.017) * 36
         total = parseInt(cmonto) + parseInt(ganancia)
        mInteres.textContent ='1.7%';
         mTiempo.textContent = '36 meses'
            break;
    }


    mTotal.textContent= total;
    mGanancias.textContent = ganancia;
    mNombres.textContent = cnombres;
    mCorreo.textContent= cemail;

}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calcular').addEventListener('click', simulador);
});
