

//contact us input information
window.onload = function() {
var $ = function (id) {return document.getElementById(id);}
 $("aa").onclick = function(){
    var x = $("fname").value;
    if(x == "") {
        alert("Please fill out empty fields.");
    }
}
}
window.onload = function() {
    var $ = function (id) {return document.getElementById(id);}
    $("aa").onclick = function(){
       var x = $("lname").value;
       if(x == "") {
           alert("Please fill out empty fields.");
       }
   }
   }
   window.onload = function() {
    var $ = function (id) {return document.getElementById(id);}
    $("aa").onclick = function(){
       var x = $("email").value;
       if(x == "") {
           alert("Please fill out empty fields.");
       }
   }
   }
   window.onload = function() {
    var $ = function (id) {return document.getElementById(id);}
    $("aa").onclick = function(){
       var x = $("county").value;
       if(x == "") {
           alert("Please fill out empty fields.");
       }
   }
   }
   window.onload = function() {
    var $ = function (id) {return document.getElementById(id);}
    $("aa").onclick = function(){
       var x = $("comment").value;
       if(x == "") {
           alert("Please fill out empty fields.");
       }
   }
}

//cars for sale
$(document).ready(function(){
    $.getJSON("junkyard.json", function(data) {
        $.each(data, function(){
            $.each(this, function(key, value){
                $("#cars_sale").append(
                    "<h2>" + value.car_name + "</h2>" +
                    "<img src=" + value.image + ">" +
                    "<h3>" + value.price + "</h3>" +
                    "<p>" + value.car_description + "</p><br>" 
                    
                   
                );
            });
        });
    });
});

//customers
$(document).ready(function() {
    $("#slider").bxSlider({
        randomStart: true,
        captions:true,
        pause: 3000,
        pagerType: "short",
        pagerSelector:"#id_pager",
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        mode: "fade",
    });
});

//get directions-accordion
$(document).ready(function(){
    $("#accordion").accordion({
        heightStyle: "content",
        collapsible: true

    });

});

