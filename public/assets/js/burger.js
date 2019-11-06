$(function() {
    $(".devoured").on("click", function(event) {
        var id = $(this).data("id");
        console.log(id);

        // var newState = $(this).data("state");
        // console.log(newState);

        var newStateDevour = {
            devoured: true
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newStateDevour
        }).then(function() {
            console.log("changed devour to", newState);
            location.reload();
        });
    });

    $("#add-burger").on("click", function(event) {
        console.log("add working");
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("new burger added");
            location.reload();
        });
    });



});