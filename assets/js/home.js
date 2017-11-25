$('.panel').hide();

$('.button-how').on('click', function(){
  $('.panel').toggle('panel');
  $('.button-how').addClass('button-how-remove');
  $('.RDC-wrap').addClass('button-how-remove');

});

if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0)
{
   document.getElementsByTagName("BODY")[0].className += " safari";
}
