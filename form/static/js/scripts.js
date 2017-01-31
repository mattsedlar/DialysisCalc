let step = 0;
// let colors = ['#e3f0f7','#b5c0c4','#93aeb6','#93aeb6','#b5c0c4','#e3f0f7'];

$(document).ready(function(){
  // Steps
  $(document).on("click","#btnStep0,#btnStep1, #btnStep3, #btnStep4",function(){
    
    if ($(this).attr('id') == 'btnStep0') {
        
        if( $('#id_position').val() == "Choose Your Job" | $('#id_facility').val() == "Choose Your Employer") {
            alert("Please fill out the required fields");
        }
        
        else {
            $('#step' + step).css('display','none');
            step += 1;
            $('#step'+ step).css('display','block');
        }
    }
    
    else {
    
        $('#step' + step).css('display','none');
        step += 1;
        $('#step'+ step).css('display','block');
     }
  });
  // Prevent Zero Values for Shifts
  $(document).on("click", "#id_all_shifts, #id_opening, #id_mid, #id_breaks, #id_sick, #id_closing", function() {
    $(this).css('color','#000');
  });
  // Social Worker Exception
  $("#id_position").on("click", function() {
    if($(this).val() == "Social Worker") {
        $("#social").css("display","block");
        $("#other").css("display","none");
    }
  });
});
