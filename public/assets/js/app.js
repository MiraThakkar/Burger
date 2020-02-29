$(function (){

  $(".create-form").on("submit", function(event) {
    // preventDefault on a submit event.
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

    $(".delete-burger").on("click", function(event) {
      event.stopPropagation();

      var id = $(this).parent().parent().data("id");
      
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  
  
  
   