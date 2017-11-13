function startGame(){
	document.turn = "X";
	document.winner = null;
	setMessage("Game Start" + " "+ document.turn + "  " + "Turn");
}

function setMessage(msg){
	$("#message").text(msg);
}

function actionUser(square){
	if(document.winner != null){
		setMessage(document.turn + " , you won ! ");
	}
	else if(square.innerHTML === ''){
		square.innerHTML = document.turn;
		switchCase();
	}else{
		setMessage("Already Used");
	}
}

function switchCase(){
	if(checkWinner(document.turn)){
		setMessage("Congrat" + " " + document.turn + " , you won ! ");
		document.winner = document.turn;
	}
	else if(document.turn == "X"){
		document.turn = "O";
	}else{
		document.turn = "X";
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


function clearGame(){
	for(var i = 1 ; i <= 9 ;i++){
		document.getElementById(i).innerHTML = "";
	}
}