$(document).ready(function(){
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?+id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";
    $.getJSON(url,function(data) {
        var image ="";
        $.each(data.items, function(i, item) {
            image += "<img src =" +item.media.m + ">";
            image += "&nbsp;&nbsp;&nbsp;&nbsp;" 

        });
        $("#new_building").html(image);
});

});