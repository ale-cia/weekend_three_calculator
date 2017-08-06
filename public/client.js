console.log('jQuery!');

$(document).ready(function(){

   $('#add').on('click', function(){
       var numOne = $('#numOne').val();
       var numTwo = $('#numTwo').val();

      console.log('add button clicked');
      var calcData = {
          numOne: numOne,
          numTwo: numTwo,
          type: 'add'
      };//calcData
      
        $.ajax({
            method: "POST",
            url: '/operation',
            data: calcData,
            success: function(response){
                console.log(calcData);
            }
        });
   }); //#numOne button click



   //  $('#equals').on('click', function(){
   //      console.log(numOne);
   //      console.log('equal button clicked');
   // });









});//doc ready
