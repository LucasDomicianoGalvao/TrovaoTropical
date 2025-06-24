// js/script.js
$(document).ready(function () {
  $('#mostrarMais').click(function () {
    $('#infoExtra').slideToggle();
    $(this).text(function (i, text) {
      return text === 'Saiba Mais' ? 'Mostrar Menos' : 'Saiba Mais';
    });
  });
});
