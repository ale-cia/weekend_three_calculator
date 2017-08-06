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

//Bundle into an object
//Create ajax
        $.ajax({
            method: "POST",
            url: '/operation',
            data: calcData,
            success: function(response){
                console.log(calcData);
            }
        });
   }); //#numOne button click


   $('#subtract').on('click', function(){
       var numOne = $('#numOne').val();
       var numTwo = $('#numTwo').val();

      console.log('subtract button clicked');
      var calcData = {
          numOne: numOne,
          numTwo: numTwo,
          type: 'subtract'
      };//calcData

//Bundle into an object
//Create ajax
        $.ajax({
            method: "POST",
            url: '/operation',
            data: calcData,
            success: function(response){
                console.log(calcData);
            }
        });
   }); //#numOne button click


   $('#multiply').on('click', function(){
       var numOne = $('#numOne').val();
       var numTwo = $('#numTwo').val();

      console.log('multiply button clicked');
      var calcData = {
          numOne: numOne,
          numTwo: numTwo,
          type: 'multiply'
      };//calcData

//Bundle into an object
//Create ajax
        $.ajax({
            method: "POST",
            url: '/operation',
            data: calcData,
            success: function(response){
                console.log(calcData);
            }
        });
   }); //#numOne button click


   $('#divide').on('click', function(){
       var numOne = $('#numOne').val();
       var numTwo = $('#numTwo').val();

      console.log('divide button clicked');
      var calcData = {
          numOne: numOne,
          numTwo: numTwo,
          type: 'divide'
      };//calcData

//Bundle into an object
//Create ajax
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
