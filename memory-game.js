$(function(){

	var cards = [1,1,2,2,3,3,4,4];

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
		if($(".item").length == 2){
			var num_one = parseInt($(".item:first").text());
			var num_two = parseInt($(".item:last").text());

			if(num_one == num_two){

				setInterval(function(){
					$(".item").each(function(){
						$(this).css("opacity","-1").removeClass("item");
						$(this).css("cursor","none");
					},1000);
				});
			}
		}

		else if($(".item").length > 2){	
			$(".item").each(function(){	$(this).text(" ").removeClass("item");	});
		}

	}

	// The Game
	function startGame(){
		assignCaseNum();
		showDataCase();
	}
	startGame();
});