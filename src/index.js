import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const buttonreset = document.getElementById("reset-button");
const txtUserInput = document.querySelector("textarea[name='user-input']");

const item1 = document.querySelectorAll(".item1")[0];
const item2 = document.querySelectorAll(".item1")[1];
const item3 = document.querySelectorAll(".item1")[2];
const item4 = document.querySelectorAll(".item1")[3];
const item5 = document.querySelectorAll(".item1")[4];
const item6 = document.querySelectorAll(".item1")[5];
console.log(txtUserInput)
txtUserInput.addEventListener("input",function(event){
  const input1 = event.target.value;

  const conteopalabras = analyzer.getWordCount(input1);
  item1.textContent = "Palabras: " + conteopalabras;

  const conteocaracteres = analyzer.getCharacterCount(input1);
  item2.textContent = "Caracteres: " + conteocaracteres;

  const conteocaracteresexcluyendoespacio = analyzer.getCharacterCountExcludingSpaces(input1);
  item3.textContent = "Caracteres excluyendo espacios y signos de puntuación: " + conteocaracteresexcluyendoespacio;

  const conteonumeros = analyzer.getNumberCount(input1);
  item4.textContent = "Números: " + conteonumeros;

  const sumatotalnumeros = analyzer.getNumberSum(input1);
  item5.textContent = "Suma total de números: " + sumatotalnumeros;

  const longitudmedia = analyzer.getAverageWordLength(input1);
  item6.textContent = "Longitud media de las palabras:" + longitudmedia;

});
buttonreset.addEventListener('click', function() {
  txtUserInput.value = "";

  item1.textContent = "Palabras: ";
  item2.textContent = "Caracteres: ";
  item3.textContent = "Caracteres excluyendo espacios y signos de puntuación: ";
  item4.textContent = "Números: ";
  item5.textContent = "Suma total de números: ";
  item6.textContent = "Longitud media de las palabras: ";
});



