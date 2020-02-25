$("#addburger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger= {
        burger_name: $("#addmovie [name=burger_name]").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/movies", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("added new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

//   $(function() {
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
//   });
  
   