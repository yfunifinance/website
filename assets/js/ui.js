$(document).ready(function(){
    $(window).scroll(function() {
        if ($(document).scrollTop() > 200) {
            $(".navbar").css("background-color", "#0083ff");
        } else {
            $(".navbar").css("background-color", "transparent");
        }
    });
});