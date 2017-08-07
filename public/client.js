console.log('jQuery!');

$(document).ready(function(){

   $('#add').on('click', function(){
       var numOne = $('#numOne').val();
       var numTwo = $('#numTwo').val();

    //   console.log('add button clicked');
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
            }//success
        }); //ajax

        $.ajax({
            method: 'GET',
            url: '/operation',
            success: function(response){
                console.log(response);
                $('#display').append(response);
            }//success
        }); //GET
     }); //add
 //add event listener


   $('#subtract').on('click', function(){
       var numOne = $('#numOne').val();
       var numTwo = $('#numTwo').val();

    //   console.log('subtract button clicked');
      var calcData = {
          numOne: numOne,
          numTwo: numTwo,
          type: 'subtract'
      };//calcData

        $.ajax({
            method: "POST",
            url: '/operation',
            data: calcData,
            success: function(response){
                console.log(calcData);
            }//success
        });//POST

        $.ajax({
            method: 'GET',
            url: '/operation',
            success: function(response){
                console.log(response);
                $('#display').append(response);
            }//success
        }); //GET
   }); //subtract event listener


   $('#multiply').on('click', function(){
       var numOne = $('#numOne').val();
       var numTwo = $('#numTwo').val();

    //   console.log('multiply button clicked');
      var calcData = {
          numOne: numOne,
          numTwo: numTwo,
          type: 'multiply'
      };//calcData

        $.ajax({
            method: "POST",
            url: '/operation',
            data: calcData,
            success: function(response){
                console.log(calcData);
            }//success
        }); //ajax

        $.ajax({
            method: 'GET',
            url: '/operation',
            success: function(response){
                console.log(response);
                $('#display').append(response);
            }
        }); //GET
   }); //multiply


   $('#divide').on('click', function(){
       var numOne = $('#numOne').val();
       var numTwo = $('#numTwo').val();

    //   console.log('divide button clicked');
      var calcData = {
          numOne: numOne,
          numTwo: numTwo,
          type: 'divide'
      };//calcData

        $.ajax({
            method: "POST",
            url: '/operation',
            data: calcData,
            success: function(response){
                console.log(calcData);
            }//success
        }); //POST

        $.ajax({
            method: 'GET',
            url: '/operation',
            success: function(response){
                console.log(response);
                $('#display').append(response);
            }//success
        }); //GET

    }); //divide function

   //  $('#equals').on('click', function(){
   //      ('').append(response);
   //      // console.log('equal button clicked');
   // });

    $('#clear').on('click', function(){
       $('#numOne').val('');
       $('#numTwo').val('');
   }); //clear event listener

});//doc ready
