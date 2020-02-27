$(function (){

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    
    var newBurger= {
        burger_name: $("#burgerText").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
        // Reload the page to get the updated list
        //console.log("reload in Post");
        location.reload();
      });
  });


  $(".devburger").on("click", function(event) {
      var id = $(this).data("id")
      console.log("update devoured before call");    
      var newState= {
        devoured: 1
      };
    
        // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newState
      }).then(function() {
        //console.log("back in burger.js");
        //alert("changed sleep to", newState);
        // Reload the page to get the updated list
        //location.reload();
        });
        location.reload();
    });

});






//     $(".devburger").on("click", function(event) {
//       var id = $(this).data("id");
//       var newSleep = $(this).data("newsleep");
  
//       var newState= {
//         devoured: 
//       };
  
//       // Send the PUT request.
//       $.ajax("/api/cats/" + id, {
//         type: "PUT",
//         data: newSleepState
//       }).then(
//         function() {
//           console.log("changed sleep to", newSleep);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
//  
  
   