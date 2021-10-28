
$(document).ready(function() {
    //attacj event handlers
    $(".img").click( evt => {

        const link = evt.currentTarget;

        //swap image
        $("#main-image").attr("src", link.src);

        //swap caption
        $("#caption").text(link.title);
    });

});

