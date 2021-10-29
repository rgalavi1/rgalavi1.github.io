
$(document).ready(function() {

    $(".img").each((index, link) => {
        const image = new Image();
        image.src = link.src;
    });
    //attacj event handlers
    $(".img").click( evt => {

        const link = evt.currentTarget;

        //swap image
        $("#main-image").attr("src", link.src);

        //swap caption
        $("#caption").text(link.title);
    });

});

