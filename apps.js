var inquirer = require("inquirer");
var fs = require("fs");

//question and answers in an array to pull from
var questions = [{"front": "Who was the first president of the United States?","back": "George Washington"}, 
{"front": "Is this second question working?","back": "No"}];

//counter and array identifier
var i = 0;
var correct = 0;
var incorrect = 0;

//where to move the answer from the inquirer from to check its validity
function BasicCard(name) {
	this.name = name;
	this.printAnswer = function() {console.log(" Your Answer: " + this.name + '\n' + "\n-------------------");
	}
}

//where they are asking the questions
function Inquire() {
//if statement to stop at the end of the questions	
if ( i < questions.length){
	inquirer.prompt([
	{
		//name prompt MUST be used in question type
		// all of the questions, this is an question identifier
		name: "name",
		message: questions[i].front
	}])

	.then(function(answer) {
	//this means run this function with the string answer given in name
	//answer.name is based on the string given on name, not the actual property.		
	var user = new BasicCard(answer.name);
//adds to the counter and moves the array question over one
	if ((answer.name).toLowerCase() === (questions[i].back).toLowerCase() ) {
		console.log("You are correct!");
		correct++; 
	} else {console.log("Sorry, wrong answer!");
		incorrect++; }
	i++;
	//for each 'loop' of the basicCard it will print the current info for the questions/answers
	user.printAnswer();
	//makes the inquirer run again if the if statement is still true.		
	Inquire();
	})
}
	else {	console.log("\n-------------------" + "\nThe questionnaire has ended! " + "\nYou got: " + correct + " questions correct " 
				+ "and " + incorrect + " questions incorrect." + "\n-------------------");
	}

}

//start of the questionnaire
Inquire();
