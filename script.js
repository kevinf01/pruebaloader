function enviarCorreo() {
    var correoDestino = 'kevinfernandezur@gmail.com';
    var mensaje = 'Saludos, Me interesan sus servicios.';

    window.location.href = 'mailto:' + correoDestino + '?subject=Interesado%20en%20sus%20servicios&body=' + encodeURIComponent(mensaje);
  }




  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('preloader').style.visibility = 'hidden';
        document.getElementById('preloader').style.opacity = '0';
        document.getElementById('preloader').style.transition = 'visibility 0s 0.5s, opacity 0.5s linear';
    }, 3000);
});




window.addEventListener('load', function() {
  setTimeout(function() {
    // Selecciona el preloader
    var preloader = document.getElementById('preloader');
    // Aplica un efecto de desvanecimiento (opcional)
    preloader.style.opacity = 0;
    // Oculta el preloader después de la transición de opacidad
    preloader.style.display = 'none';
  }, 3000); // 2000 milisegundos = 2 segundos
});

