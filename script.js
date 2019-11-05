var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$("#m1").click(function(){
    if($("#border_win").is(":visible")){
        $("#borbod").html('<img src="'+$("#m1").attr("src")+'"/>');
    }
    if($("#body_win").is(":visible")){
        $("#bodbod").html('<img src="'+$("#m1").attr("src")+'"/>');
    }
    if($("#pallu_win").is(":visible")){
        $("#palbod").html('<img src="'+$("#m1").attr("src")+'"/>');
    } 
});
$("#m3").click(function(){
    if($("#border_win").is(":visible")){
        $("#borbod").html('<img src="'+$("#m3").attr("src")+'"/>');
    }
    if($("#body_win").is(":visible")){
        $("#bodbod").html('<img src="'+$("#m3").attr("src")+'"/>');
    }
    if($("#pallu_win").is(":visible")){
        $("#palbod").html('<img src="'+$("#m3").attr("src")+'"/>');
    } 
});
$("#m2").click(function(){
    if($("#border_win").is(":visible")){
        $("#borbod").html('<img src="'+$("#m2").attr("src")+'"/>');
    }
    if($("#body_win").is(":visible")){
        $("#bodbod").html('<img src="'+$("#m2").attr("src")+'"/>');
    }
    if($("#pallu_win").is(":visible")){
        $("#palbod").html('<img src="'+$("#m2").attr("src")+'"/>');
    } 
});
$(document).ready(function () {
    var win = 1;
    $("#col").click(function () {
        if(win<3){
            $("#color_win").show();
            $("#col").hide();
            $("#colmin").show();

            win = win + 1;
        }
    });

    $("#body").click(function () {
        if(win<3){
        $("#body_win").show();
        $("#body").hide();
        $("#bodymin").show();
        win = win + 1;
}
    });

    $("#border").click(function () {
        if(win<3){
        $("#border_win").show();
        $("#border").hide();
        $("#bordermin").show();
        win = win + 1;
}
    });

    $("#pallu").click(function () {
        if(win<3){
        $("#pallu_win").show();
        $("#pallu").hide();
        $("#pallumin").show();
        win = win + 1;
        }
    });

    $("#Details").click(function () {
        if(win<3){
        $("#Details_win").show();
        $("#Details").hide();
        $("#DetailsMin").show();
        win = win + 1;
        }
    });




    $("#colmin").click(function () {
        if(win>0){
            $("#color_win").hide();
            $("#col").show();
            $("#colmin").hide();

            win = win - 1;
        }
    });

    $("#bodymin").click(function () {
        if(win>0){
        $("#body_win").hide();
        $("#body").show();
        $("#bodymin").hide();
        win = win - 1;
    }
    });

    $("#bordermin").click(function () {
        if(win>0){
        $("#border_win").hide();
        $("#border").show();
        $("#bordermin").hide();
        win = win - 1;
    }
    });

    $("#pallumin").click(function () {
        if(win>0){ 
        $("#pallu_win").hide();
        $("#pallu").show();
        $("#pallumin").hide();
        win = win - 1;
    }
    });
    $("#DetailsMin").click(function () {
        if(win>0){ 
        $("#Details_win").hide();
        $("#Details").show();
        win = win - 1;
    }
    });




});
