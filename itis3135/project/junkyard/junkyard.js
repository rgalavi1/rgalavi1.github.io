
var $ = function (id) {return document.getElementById(id);}

window.onload = function() {
 $("aa").onclick = function(){
    var x = $("fname").value;
    if(x == "") {
        alert("Please fill out empty fields.");
    }
}
}
window.onload = function() {
    $("aa").onclick = function(){
       var x = $("lname").value;
       if(x == "") {
           alert("Please fill out empty fields.");
       }
   }
   }
   window.onload = function() {
    $("aa").onclick = function(){
       var x = $("email").value;
       if(x == "") {
           alert("Please fill out empty fields.");
       }
   }
   }
   window.onload = function() {
    $("aa").onclick = function(){
       var x = $("county").value;
       if(x == "") {
           alert("Please fill out empty fields.");
       }
   }
   }
   window.onload = function() {
    $("aa").onclick = function(){
       var x = $("comment").value;
       if(x == "") {
           alert("Please fill out empty fields.");
       }
   }
}


$(document).ready(function() {
    $("#nav_list li").click(function() {
        $.ajax ({
            url: "junkyard.json" + $(this).children("a").attr("title") + ".json",
            dataType: "json",
            success: function(data) {
                $.each(data, function (){
                    $.each(this,  function(key, value){
                        $("main h3").html(value.car_name);
                        $("main img").html("src",value.image);
                        $("main h4").html(value.price);
                        $("main p").attr(value.car_description);
                        
                    });
                });
            }
        });

    });
});


