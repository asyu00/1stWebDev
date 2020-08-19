var userScore = 0;
var compScore = 0;
var userScore_span = document.getElementById("user-score");
var compScore_span = document.getElementById("comp-score");
var scoreBoard = document.querySelector(".scoreboard");
var jResult = document.querySelector(".jankenres");
var guu = document.getElementById("r");
var choki = document.getElementById("s");
var paa = document.getElementById("p");

function reset(){
	userScore = 0;
	compScore = 0;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	jResult.innerHTML = "Score reset!";
}

function getCompChoice(){
	var choices = ['g','c','p'];
	var rnd = Math.floor(Math.random() * 3);
	return choices[rnd]; 
}

function toWord(choice){
	if(choice === 'g') return "rock";
	else if(choice === 'c') return "scissors";
	return "paper";
}

function gcp(userChoice){
	var cChoice = getCompChoice();
	switch(userChoice+cChoice){
		case "gc":
		case "pg":
		case "cp":
			userScore++;
			userScore_span.innerHTML = userScore;
			jResult.innerHTML = "You picked "+toWord(userChoice)+" and beat computer's "+ toWord(cChoice);
			break;
		case "gg":
		case "pp":
		case "cc":
			jResult.innerHTML = "Both of you picked "+toWord(userChoice)+"!";
			break;
		case "gp":
		case "pc":
		case "cg":
			compScore++;
			compScore_span.innerHTML = compScore; 
			jResult.innerHTML = "You picked "+toWord(userChoice)+" and lost to computer's "+ toWord(cChoice);
			break;
	}
}

function janken(){
	guu.addEventListener('click', function(){
		gcp("g");
	})
	choki.addEventListener('click', function(){
		gcp("c");
	})
	paa.addEventListener('click', function(){
		gcp("p");
	})

}
janken();
//janken jscript ends

function random() {
	var thingsStr = document.getElementById('items').value;
	thingsStr = thingsStr.trim();
	if(thingsStr !== ""){
		var thingsArr = thingsStr.split(",");
		var rdm = Math.floor(Math.random() * thingsArr.length);
		document.getElementById('result').innerHTML = thingsArr[rdm];
	} else{
		document.getElementById('result').innerHTML = "Please enter values!";
	}
}

function die(){
	var number = document.getElementById('number').value;
	number = number.trim();
	if(!isNaN(number) && number !== ""){
		var rdm = Math.floor(Math.random() * number + 1);
		if(rdm === 1)
			document.getElementById('roll').innerHTML = ("You rolled a "+rdm+" and got struck by lightning.").fontcolor("orange");
		else if(rdm == number)
			document.getElementById('roll').innerHTML = ("You rolled a "+rdm+" and is made the king of the world!").fontcolor("gold");
		else
			document.getElementById('roll').innerHTML = "You rolled a "+rdm+".";
	} else{
		document.getElementById('roll').innerHTML = "Not a number!";
	}
}

function yesno(){
	var yesno = ["Yes", "No"];
	var qns = document.getElementById('qns').value;
	if(qns !== ""){
		var rdm = Math.floor(Math.random() * 2);
		document.getElementById('qres').innerHTML = qns+": "+yesno[rdm];
	}
}

