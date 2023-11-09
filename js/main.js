/* alert("hello World!");

document.writeln("<h3>Ciao Mondo!</h3>")

document.getElementById("title_page").innerHTML = "Ciao Mondo!";
 */

//Variabili
let name = prompt("Qual'è il tuo Nome?");

let surname = prompt("Qual'è il tuo Cognome?");

let favoriteColor = prompt("Qual'è il tuo Colore Preferito?");

let numberOne = prompt("Scrivi un numero");
let numberTwo = prompt("Scrivi un altro numero");

let numbersDivision = numberOne / numberTwo;

let password = name +surname + favoriteColor
let password1 = password + "21"
let password2 = password + numbersDivision
let password3 = password + Math.floor(Math.random() * 101);

alert(`Il tuo nome è: ${name} \nIl tuo cognome è: ${surname} \nIl tuo Colore Preferito è: ${favoriteColor} \n${numberOne} : ${numberTwo} = ${numbersDivision} \n\n Creazione password in corso...`);



document.getElementById("name").innerHTML = name;

document.getElementById("surname").innerHTML = surname;

document.getElementById("favoriteColor").innerHTML = favoriteColor;

document.getElementById("password1").innerHTML = password1;

document.getElementById("password2").innerHTML = password2;

document.getElementById("password3").innerHTML = password3;
