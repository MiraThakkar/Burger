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
        console.log("added new movie");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });