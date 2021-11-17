$(document).ready(function() {
    $("#nav_list li").click(function() {
        var title = $(this).children("a").attr("title");
        var filename = title + "json";
        consumeJson(filename);
    });
	
}); // end ready

function consumeJson(jsonURL) {
    $.ajax ({
        url:"json_files/" + jsonURL,
        dataType: "text",
        success: function(data) {
            var json = $.parseJson(data);
            $("main > h2").html(json.speakers[0].month + "<br/>" +json.speakers[0].speaker);
            $("main > h1").html(json.speakers[0].title);
            $("main > h2").attr("src". json.speakers[0].image);
            $("main > h2").html(json.speakers[0].text);

        }
        
    });
}