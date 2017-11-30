$(function(){

	var cards = [1,1,2,2,3,3,4,4,5,5,6,6];

	function randNumbers(){
		for(var i = 1 ; i < cards.length ;i++){
			var randNum = Math.floor(Math.random() * i);
			var tmp = cards[i];
			cards[i] = cards[randNum];
			cards[randNum] = tmp;
		}
		return cards;
	}

	function assignCaseNum(){
		var randNumArray = randNumbers();
		$(".case").each(function(i){
			$(this).attr("data-num",randNumArray[i]);
		})
	}

	var showData = true;
	function showDataCase(){
		$(".case").click(function(){
			$(this).text($(this).attr("data-num")).addClass("item");
			checkNumberItemSelected();
		});
	}

	function checkNumberItemSelected(){
		//console.log($(".item:first").length);
		var cnt = 0;
		if($(".item").length == 2){
			var num_one = parseInt($(".item:first").text());
			var num_two = parseInt($(".item:last").text());
			
			if(num_one == num_two){
				cnt++;
				$(".item").each(function(){
					$(this).css("opacity","-1").removeAttr("id");
					$(this).css("cursor","none");
					setInterval(increasePoints(),1000);
					checkWinner();
				});
			}
		}

		else if($(".item").length > 2){	
			$(".item").each(function(){	$(this).text(" ").removeClass("item");	});
		}

	}

	function increasePoints(){
		var points = 0;
		$(".case").each(function(){
			if(!$(this).attr("id")){
				$("#score").text("Points : " + (points+=5));
			}
		});
	}

	$("#msg-memory").hide();
	function checkWinner(){
		if($("#rm").length == 0){
			$("#msg-memory").show();
		}
	}
	
	// The Game
	function startGame(){
		assignCaseNum();
		showDataCase();
	}
	startGame();
});
