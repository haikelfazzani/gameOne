$("body").ready(function(){
	document.X = "X";
	document.winner = null;
	setMessage("Game Start" + " "+ document.X + "  " + "Turn");
});

function setMessage(msg){
	$("#message").text(msg);
}

function actionUser(square){
	if(document.winner != null){
		setMessage(document.X + " , you won ! ");
	}
	else if(square.innerHTML === ''){
		square.innerHTML = document.X;
		switchCase();
	}else{
		setMessage("Already Used");
	}
}

function switchCase(){
	if(checkWinner(document.X)){
		setMessage("Congrat" + " " + document.X + " , you won ! ");
		document.winner = document.X;
	}
	else if(document.X == "X"){
		document.X = "O";
	}else{
		document.X = "X";
	}
}

function checkWinner(move){
	if(checkContent(1,2,3,move) 
		|| checkContent(4,5,6,move) 
		|| checkContent(7,8,9,move) 
		|| checkContent(1,4,7,move) 
		|| checkContent(2,5,8,move) 
		|| checkContent(3,6,9,move) 
		|| checkContent(1,5,9,move) 
		|| checkContent(3,5,7,move)){
		return true;
	}
	return false;
}

function checkContent(i,j,k,move){
	if(getBox(i) == move && getBox(j) == move && getBox(k) == move){
		return true;
	}
	return false;
}

function getBox(i){
	return document.getElementById(i).innerHTML;
}

$(function(){

	$("#start-game").click(function(){
		/*for(var i = 1 ; i <= 9 ;i++){
			document.getElementById(i).innerHTML = "";
		}*/
		location.reload();
	});

	

});