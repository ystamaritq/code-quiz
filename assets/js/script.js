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
			"A. document.getElement(“geek”).innerHTML=”I am a Geek”;",
			"B. document.getElementById(“geek”).innerHTML=”I am a Geek”;",
			"C. document.getId(“geek”)=”I am a Geek”;",
			"D.  document.getElementById(“geek”).innerHTML=I am a Geek;",
		],
		hit: "B. Correct",
	},

	{
		question: "How do you create a function in JavaScript?",
		answers: [
			"A. function:myFunction()",
			"B. function myFunction()",
			"C. function = myFunction()",
			"D. None of the above.",
		],
		hit: "B. Correct",
	},

	{
		question:
			"Which built-in method combines the text of two strings and returns a new string?",
		answers: [
			"A. append()",
			"B. concat()",
			"C. attach()",
			"D. None of the above.",
		],
		hit: "B. Correct",
	},

	{
		question:
			"Which of the following function of String object returns the characters in a string between two indexes into the string?",
		answers: ["A. split()", "B. slice()", "C. substr()", "D. substring()"],
		hit: "D. Correct",
	},

	{
		question: "How to write an IF statement in JavaScript?",
		answers: [
			"A.  if i = 5",
			"B.  if (i == 5)",
			"C.  if i == 5 then",
			"D.  if i = 5 then",
		],
		hit: "B. Correct",
	},
];

var startEl = document.querySelector("#start");

var sectionWelcome = document.querySelector("#welcome-modal");

var sectionQuiz = document.querySelector("#question-modal");

startEl.addEventListener("click", function () {
	alert("The button is working!");
});

/*
example for clear the element

var typefaceEl = document.querySelector("#typeface");
var clearEl = document.querySelector("#clear");
var h1El = document.querySelector("#h1");
var h2El = document.querySelector("#h2");
var h3El = document.querySelector("#h3");
var pEl = document.querySelector("#p");
var textAreaEl = document.querySelector("#textarea");

var elements = [h1El, h2El, h3El, pEl];

var typeface;

typefaceEl.addEventListener("change", function (event) {
  event.preventDefault();
  typeface = typefaceEl.value;
  document.querySelector(".container").style.fontFamily = typeface;
});

textAreaEl.addEventListener("keydown", function (event) {
  var key = event.key.toLowerCase();
  var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split(
    ""
  );
  if (alphabetNumericCharacters.includes(key)) {
    elements.forEach(function (element) {
      element.textContent += event.key;
    });
  }
});

clearEl.addEventListener("click", function (event) {
  event.preventDefault();
  textAreaEl.value = "";
  elements.forEach(function (element) {
    element.textContent = "";
  });
});
 */
