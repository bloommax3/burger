// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-button").on("click", function(event) {
      var id = $(this).attr("id");
      console.log(id)
  
      var devouredBurger = {
        id: id
      };
  
      // Send the PUT request.
      $.ajax("/api/burger/id/"+id, {
        type: "PUT",
        data: devouredBurger
      }).then(
        function() {
          console.log("devoured buger with id "+ id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var burger = {
        name: $("#burger-name").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: burger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  