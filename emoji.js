//Emoji 1

$(document).ready(function(){
		   		   
		  	$("#dislike").hide();
						
			$("#emoji").click(function(){
			$("#like").toggle();
			$("#dislike").toggle();	
			});
			
		});
		
var x = document.getElementById("likecount");

			function likes() {
			document.getElementById("likecount").innerHTML = "1";
			};

			function dislikes() {
			document.getElementById("likecount").innerHTML = "0";
			};



//Emoji 2			
		
$(document).ready(function(){
		   		   
		  	$("#dislike2").hide();
						
			$("#emoji2").click(function(){
			$("#like2").toggle();
			$("#dislike2").toggle();	
			});
			
		});
		
var y = document.getElementById("likecount2");

			function likes2() {
			document.getElementById("likecount2").innerHTML = "1";
			};

			function dislikes2() {
			document.getElementById("likecount2").innerHTML = "0";
			};

//Emoji 3 
			
$(document).ready(function(){
		   		   
		  	$("#dislike3").hide();
						
			$("#emoji3").click(function(){
			$("#like3").toggle();
			$("#dislike3").toggle();	
			});
			
		});
	
var z = document.getElementById("likecount3");

			function likes3() {
			document.getElementById("likecount3").innerHTML = "1";
			};

			function dislikes3() {
			document.getElementById("likecount3").innerHTML = "0";
			};
			
//total number of likes


var total = x + y + z;
document.getElementById("total").innerHTML = total;

				