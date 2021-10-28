
$(document).ready(function() {

    $(".img").click( evt => {

        const link = evt.currentTarget;

        
        $("#main-image").attr("src", link.src);

        
        $("#caption").text(link.title);
    });

});

