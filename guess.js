$(function(){
	$("#msg").hide();
	var min = 1;
	var max = 9;

	function randNumber(min,max){
		return parseInt(Math.floor(Math.random()*(max-min+1)+min));
	}

	var numRand = randNumber(min,max);

	$("#guess").click(function(){
	
		var userInput = parseInt($("#num-field").val());
		if($("#num-field").val().length != 0){
			if(userInput === numRand){

				$("#msg").text("congrats you won ! "+ numRand).css("background","#8bc34a").show();

			}else if(userInput !== numRand){

				$("#msg").text("wrong guess !").css("background","red").show();
			}
		}else if($("#num-field").val().length == 0){

			$("#msg").text("you should enter a number").css("background","red").show();
			
		}
	});


	$("#start").click(function(){
		location.reload();
	});

});
