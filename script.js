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





});
