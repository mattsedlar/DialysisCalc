let step = 0;
let colors = ['#36577f','#64507a'];

$(document).ready(function(){

  $('#btnStep' + step).on('click',function(){
    $('#step' + step).css('display','none');
    step += 1;
    $('body').css('background-color',colors[step]);
    $('#step'+ step).css('display','block');
  })

})