let step = 0;
let colors = ['#36577f','#64507a','#bf5582','#bf5582','#f8a489','#36577f'];

$(document).ready(function(){
  $(document).on("click","#btnStep0,#btnStep1, #btnStep3, #btnStep4",function(){
    console.log('#btnStep' + step);
    $('#step' + step).css('display','none');
    step += 1;
    $('body').css('background-color',colors[step]);
    $('#step'+ step).css('display','block');
  });
});