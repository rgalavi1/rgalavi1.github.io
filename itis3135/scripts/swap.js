
$(document).ready(function() {

    $("#image-list a").each( (index, link) => {
        const image = new Image();
        image.src = link.href;
    });
    $("#image-list a").click( evt => {
        const link = evt.currentTarget;

        $("#main-image").attr("src", link.href);

        $("#caption").text(link.title);

        evt.preventDefault();
    });

    $("li:first-child a").focus();
        
    
 

});

