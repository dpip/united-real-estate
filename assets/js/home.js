$('.panel').hide();

$('.button-how').on('click', function(){
  $('.panel').toggle('panel');
  $('.button-how').addClass('button-how-remove');
  $('.RDC-wrap').addClass('button-how-remove');

});
