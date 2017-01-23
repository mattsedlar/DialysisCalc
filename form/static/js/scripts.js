let step = 0;
let colors = ['#e3f0f7','#b5c0c4','#93aeb6','#93aeb6','#b5c0c4','#e3f0f7'];

$(document).ready(function(){
  $(document).on("click","#btnStep0,#btnStep1, #btnStep3, #btnStep4",function(){
    console.log('#btnStep' + step);
    $('#step' + step).css('display','none');
    step += 1;
    $('body').css('background-color',colors[step]);
    $('#step'+ step).css('display','block');
  });
});