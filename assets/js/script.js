var quizObject = ques;

var quizArray = [
	{
		question:
			"What is the HTML tag under which one can write the JavaScript code?",
		answers: ["A. <javascript>", "B. <scripted>", "C. <script>", "D. <js>"],
		hit: "C. Correct",
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
			"C.  function = myFunction()",
		],
		hit: "B. Correct",
	},

	{
		question:
			"What is the HTML tag under which one can write the JavaScript code?",
		answers: ["A. <javascript>", "B. <scripted>", "C. <script>", "D. <js>"],
		hit: "C. <script>",
	},

	{
		question:
			"What is the HTML tag under which one can write the JavaScript code?",
		answers: ["A. <javascript>", "B. <scripted>", "C. <script>", "D. <js>"],
		hit: "C. <script>",
	},

	{
		question:
			"What is the HTML tag under which one can write the JavaScript code?",
		answers: ["A. <javascript>", "B. <scripted>", "C. <script>", "D. <js>"],
		hit: "C. <script>",
	},

	{
		question:
			"What is the HTML tag under which one can write the JavaScript code?",
		answers: ["A. <javascript>", "B. <scripted>", "C. <script>", "D. <js>"],
		hit: "C. <script>",
	},
];

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
