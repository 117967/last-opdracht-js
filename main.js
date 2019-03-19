// Inputs and 1st div
var input = document.getElementById("addname");
var div1 = document.getElementById("div1");


$("#btn-add").click(function () {
    
    var a = document.createElement("div");
    a.innerHTML = input.value;
    
    $(a).click(function () {
        var wasSelected = $(this).hasClass("selected");
        if(wasSelected)
            $(this).removeClass("selected");
        else
            $(this).addClass("selected");
    });

    div1.append(a);
});

$("#left").click(function(){
    var element = $('.selected').detach();
$('#div1').append(element);
})

$("#right").click(function(){
    var element = $('.selected').detach();
$('#div2').append(element);
})