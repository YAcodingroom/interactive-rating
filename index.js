$(".score").click(function () {
    $(".score").removeClass("selected");
    $(this).addClass("selected");
    $("#score").text($(this).val());
})

$("#submit").click(function () {
    if ($(".score").hasClass("selected")) {
        $(".rate-state").addClass("d-none").removeClass("d-block");
        $(".thanks-state").addClass("d-block").removeClass("d-none");
    } else {
        alert("Please let us know how we did with your support request.");
    }
})