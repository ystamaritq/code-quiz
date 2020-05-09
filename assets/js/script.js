// array of the quiz (question, choices, hit)
var quizArray = [
	{
		question:
			"What is the HTML tag under which one can write the JavaScript code?",
		answers: [
			{
				choice: "A. <javascript>",
				id: "A",
			},
			{
				choice: "B. <scripted>",
				id: "B",
			},
			{
				choice: "C. <script>",
				id: "C",
			},
			{
				choice: "D. <js>",
				id: "D",
			},
		],
		hit: "C",
	},

	{
		question:
			"Choose the correct JavaScript syntax to change the content of the following HTML code",
		answers: [
			{
				choice: "A. document.getElement(“geek”).innerHTML=”I am a Geek”;",
				id: "A",
			},
			{
				choice: "B. document.getElementById(“geek”).innerHTML=”I am a Geek”;",
				id: "B",
			},
			{ choice: "C. document.getId(“geek”)=”I am a Geek”;", id: "C" },
			{
				choice: "D. document.getElementById(“geek”).innerHTML=I am a Geek;",
				id: "D",
			},
		],
		hit: "D",
	},

	{
		question: "How do you create a function in JavaScript?",
		answers: [
			{ choice: "A. function:myFunction()", id: "A" },
			{ choice: "B. function myFunction()", id: "B" },
			{ choice: "C. function = myFunction()", id: "C" },
			{ choice: "D. None of the above.", id: "D" },
		],
		hit: "B",
	},

	{
		question:
			"Which built-in method combines the text of two strings and returns a new string?",
		answers: [
			{ choice: "A. append()", id: "A" },
			{ choice: "B. concat()", id: "B" },
			{ choice: "C. attach()", id: "C" },
			{ choice: "D. None of the above.", id: "D" },
		],
		hit: "B",
	},

	{
		question:
			"Which of the following function of String object returns the characters in a string between two indexes into the string?",
		answers: [
			{ choice: "A. split()", id: "A" },
			{ choice: "B. slice()", id: "B" },
			{ choice: "C. substr()", id: "C" },
			{ choice: "D. substring()", id: "D" },
		],
		hit: "D",
	},

	{
		question: "How to write an IF statement in JavaScript?",
		answers: [
			{ choice: "A.  if i = 5", id: "A" },
			{ choice: "B.  if (i == 5)", id: "B" },
			{ choice: "C.  if i == 5 then", id: "C" },
			{ choice: "D.  if i = 5 then", id: "D" },
		],
		hit: "B",
	},
];

//var to access the button element *start the quiz*
var startEl = document.querySelector("#start");

//var to access the welcome section
var sectionWelcome = document.querySelector("#welcome-modal");

//var to access the question section
var sectionQuiz = document.querySelector("#modal-section");

//var creating attribute to show the questions
var questionEl = document.querySelector(".question-modal");

//var options-modal
var optionsEl = document.querySelector(".options-modal");

//creating a button for the choices
var btnEl = document.createElement("BUTTON");

//adding addEventListener to the button to start the quiz
startEl.addEventListener("click", startQuiz);

//var hit selector
var hitShow = document.querySelector(".hit");

//var index to go through the array
var indexArray = 0;

//var for viewscores
var score = 0;

//var timer
var timer = 70;

//timer element html
var timerEl = document.querySelector("#count");

//var modal done page
var modalDoneEl = document.querySelector("#modal-done");

//var score element
var scoreEl = document.querySelector("#finalscore");

//var to get submit button element
var submitEl = document.querySelector("#submit");

//add scores intials array
var scoreArray = [];

//function startQuiz
function startQuiz() {
	quizTimer();
	//hidden the section when the button is pressed
	sectionWelcome.style.display = "none";
	//show the sectionQuiz with the add class d-flex
	sectionQuiz.classList.add("d-flex");
	//remove the sectionQuiz with the remove class d-none
	sectionQuiz.classList.remove("d-none");
	showPage();
}

function cleanPage() {
	if (indexArray > 0) {
		questionEl.textContent = "";
		optionsEl.textContent = "";
		hitShow.textContent = "";
	}
}

function showPage() {
	//add a margin-bottom to the questions
	questionEl.classList.add("mb-3");
	//show the question
	questionEl.textContent = quizArray[indexArray].question;

	for (let a = 0; a < quizArray[indexArray].answers.length; a++) {
		var btnEl = document.createElement("BUTTON");
		btnEl.classList.add("btn", "btn-info", "px-5", "mb-3", "mt-2");
		btnEl.textContent = quizArray[indexArray].answers[a].choice;
		optionsEl.classList.add("d-flex", "flex-column");
		optionsEl.appendChild(btnEl);
		if (quizArray[indexArray].answers[a].id === quizArray[indexArray].hit) {
			btnEl.addEventListener("click", timeDelayCorrect);
		} else {
			btnEl.addEventListener("click", timeDelayWrong);
			timer = timer - 1;
		}
	}
}

function timeDelayCorrect() {
	var secondsDelay = 1;
	hitShow.classList.add("mt-4");
	hitShow.textContent = "Rigth Answer!";
	score++;

	var time = setInterval(function () {
		secondsDelay = secondsDelay - 1;

		if (secondsDelay === 0) {
			clearInterval(time);
			indexArray++;
			cleanPage();
			showPage();
		}
	}, 1000);
}

function timeDelayWrong() {
	var secondsDelay = 1;
	hitShow.classList.add("mt-4");
	hitShow.textContent = "Wrong Answer! Keep trying";

	var time = setInterval(function () {
		secondsDelay = secondsDelay - 1;

		if (secondsDelay === 0) {
			clearInterval(time);
			indexArray++;
			cleanPage();
			showPage();
		}
	}, 1000);
}

function quizTimer() {
	var timeId = setInterval(() => {
		timer = timer - 1;
		timerEl.textContent = timer;

		if (timer === 0 || indexArray === quizArray.length) {
			clearInterval(timeId);
			cleanPage();
			modalDoneEl.classList.remove("d-none");
			scoreEl.textContent = score;
		}
	}, 1000);
}

function saveInitialScore() {
	//adding the scores to an array to save them
	scoreArray.push(score);

	//clean the page before scores and initials display page
	modalDoneEl.classList.add("d-none");
	modalDoneEl.classList.remove("card", "text-center", "shadow-lg");
}

submitEl.addEventListener("click", saveInitialScore);
