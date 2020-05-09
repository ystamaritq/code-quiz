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

//var index to go through the array
var indexArray = 0;

//var for viewscores
var score = 0;

//var timer
var timer = 70;

//var array for highscores (array of objects)
var userHighScores = [];

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
//var hit selector
var hitShow = document.querySelector(".hit");
//creating a button for the choices
var btnEl = document.createElement("BUTTON");
//var modal done page
var modalDoneEl = document.querySelector("#modal-done");
//var score element
var scoreEl = document.querySelector("#finalscore");
//var to get submit button element
var submitEl = document.querySelector("#submit");
//timer element html
var timerEl = document.querySelector("#count");
//var to get highscoresPage section
var highscoresPageEl = document.querySelector("#highscoresPage");
//var for the initial elements
var initialEl = document.querySelector("#initials");
//var to show the initial and scores
var showInitialScores = document.querySelector("#scores-list");
//var submitGoback element
var submitGobackEl = document.querySelector("#submitGoback");
//var clear highscores
var clearHighScoresEl = document.querySelector("#submitClear");
//var to show array highscores
var showHighScoresCorner = document.querySelector("#view-scores-id");

/**
 * start the quiz
 */
function startQuiz() {
	//reset quiz variables
	indexArray = 0;
	score = 0;
	timer = 70;

	quizTimer();
	//hidden the section when the button is pressed
	sectionWelcome.classList.remove("d-flex");
	sectionWelcome.classList.add("d-none");

	//show the sectionQuiz with the add class d-flex
	sectionQuiz.classList.add("d-flex");
	//remove the sectionQuiz with the remove class d-none
	sectionQuiz.classList.remove("d-none");
	showPage();
}

/**
 * clean the page after start button is pressed
 */
function cleanPage() {
	if (indexArray > 0) {
		questionEl.textContent = "";
		optionsEl.textContent = "";
		hitShow.textContent = "";
	}
}

function showPage() {
	debugger;
	if (indexArray === quizArray.length) return;
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
			completeQuiz();
		}
	}, 1000);
}

function completeQuiz() {
	cleanPage();
	modalDoneEl.classList.remove("d-none");
	modalDoneEl.classList.add("d-flex");
	scoreEl.textContent = score;

	if (initialEl.value !== "") {
		initialEl.value = "";
	}
}

function saveInitialScore() {
	//getting the input and removing the outside spaces
	var initialValue = initialEl.value.trim();

	userHighScores.push({ initials: initialValue, score: score });

	//clean the page before highscores display page
	modalDoneEl.classList.add("d-none");
	modalDoneEl.classList.remove("d-flex");

	// show the new page for highcores
	showHighscores();
}

function showHighscores() {
	highscoresPageEl.classList.remove("d-none");
	highscoresPageEl.classList.add("d-flex");

	showInitialScores.textContent = "";

	for (let i = 0; i < userHighScores.length; i++) {
		var divEl = document.createElement("div");
		divEl.classList.add("card", "initial-score", "pl-2", "shadow-sm", "mb-2");
		divEl.textContent =
			i +
			1 +
			". " +
			userHighScores[i].initials +
			" - " +
			userHighScores[i].score;
		showInitialScores.appendChild(divEl);
	}
}

function goBack() {
	timer = 0;
	highscoresPageEl.classList.add("d-none");
	highscoresPageEl.classList.remove("d-flex");
	sectionWelcome.classList.add("d-flex");
}

function clearScores() {
	userHighScores.splice(0, userHighScores.length);
	showInitialScores.textContent = "";
}

function showCornerScores() {
	cleanPage();
	showHighscores();
}

// all event here
startEl.addEventListener("click", startQuiz);
submitEl.addEventListener("click", saveInitialScore);
submitGobackEl.addEventListener("click", goBack);
clearHighScoresEl.addEventListener("click", clearScores);
showHighScoresCorner.addEventListener("click", showCornerScores);
