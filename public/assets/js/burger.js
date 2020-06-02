// different js file within the assets directory all within the public that contains the ajax that calls onclick and submit events triggered to run the actions

// function to make sure everything loads first
$(function() {
    // $(".change-devour").on("click", function(event) {
    //     var id = $(this).data("id");
    //     var newDevour = $(this).data("newDevour");

    //     var newDevourState = {
    //         devoured: newDevour
    //     };

    //     $.ajax("/api/burgers", {
    //         type: "PUT",
    //         data: newDevourState
    //     }).then(function(){
    //         console.log("Added new burger");
    //         location.reload();
    //     });
    // });
    // onclick event
    $(".eatburger").on("click", function(event) {
        // event.preventDefault();
        var id = $(this).data("id");
        var devouredState = {
            devoured: newDevoured
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

$(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
        name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
    };

    // send the POST request
    $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
    }).then(function() {
        console.log("Added new burger");
        location.reload();
    });
    });
// trash burger onclick even by creating a delete action
$(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");
    // send the delete request
    $.ajax("/api/burgers/" + id, {
        type: "DELETE"
    }).then(function() {
        console.log("Deleted Burger", id);
    location.reload();
    });
});
});

