var $ = function(id) {
	return document.getElementById(id);
};

var items =["Espresso", "Cappuccino"];
var costs =["1.95", "3.45"];
var details= ["Delicious espresso, wanna try it?", "Delicious Cappuccino"];
var orderTotal= 0;
var orderItems;

window.onload = function() {


	//add onclick event handler for each image
	var a = document.getElementsByTagName("img");

	// for click event add item to order and update total
	for(var i = 0; i < a.length; i++) {
		a[i].onclick=clickPic;
		console.log(a[i]);
	}
}

	// display order and total
	var clickPic = function() {
		var image = this.id;
		console.log(image);

		for(i = 0; i < items.length;i++) {
			if(image == items[i]) {
				itemCost = costs[i];
				itemName = items[i];
				itemDetails = details[i];
				document.getElementById("order").innerHTML += "$" + itemCost + " - " + itemName + " - " + itemDetails + "<br>";
				orderTotal += parseFloat(itemCost);
				document.getElementById("total").innerHTML = "Total: $" + orderTotal.toFixed(2);

			}

		}
	
	

	
		
}; // end onload