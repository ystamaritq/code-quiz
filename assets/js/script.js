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
				choiceB: "B. <scripted>",
				id: "B",
			},
			{
				choiceC: "C. <script>",
				id: "C",
			},
			{
				choiceD: "D. <js>",
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

//creating a button for the choices
var btnEl = document.createElement("button");

//appending the btn to the question-modal
var btnElAppend = questionEl.appendChild(btnEl);

//var options-modal
var optionsEl = document.querySelector(".options-modal");

//adding addEventListener to the button to start the quiz
startEl.addEventListener("click", startQuiz);

//function startQuiz
function startQuiz() {
	//hidden the section when the button is pressed
	sectionWelcome.style.display = "none";
	//show the sectionQuiz with the add class d-flex
	sectionQuiz.classList.add("d-flex");
	//remove the sectionQuiz with the remove class d-none
	sectionQuiz.classList.remove("d-none");

	//control flow to get all the questions and choices
	for (let index = 0; index < quizArray.length; index++) {
		questionEl.textContent = quizArray[index].question;
		{
			for (let a = 0; a < quizArray[index].answers.length; a++) {
				btnEl.classList.add("btn", "btn-info", "mt-5", "px-5", "mb-3");
				btnEl.label = quizArray[index].answers[a].choice;
				btnElAppend;
			}
		}
	}
}
