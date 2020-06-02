// different js file within the assets directory all within the public that contains the ajax that calls onclick and submit events triggered to run the actions

// function to make sure everything loads first
$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(), 
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("Added new burger");
            location.reload();
        });
    });
    // onclick event
    $(".eatburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };
           // put request 
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState 
    }).then(function() {
        console.log("Burger devoured");
        location.reload();
    });
});
// trash burger onclick even by creating a delete action
    $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
    }).then(location.reload());
});

