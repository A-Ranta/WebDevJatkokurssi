Video 1
-Esittely javascript videoille ja videoiden tekijöistä

Video 2
-Lyhyt esittely javascriptin ominaisuuksista ja miksi sitä kannattaa opiskella

Video 3
-Javascript selaimessa vs palvelimella
-Javascript clientissa tehdään esim index.js tiedosto ja script tageilla ja palvelimella tarvitaan asentaa Node.js ja käytetään web palvelinten rakentamisessa

Video 4
-Tarvittavat ”työkalut”
-Visual Studio Code, mahdolliset laajennukset sésim ESLint, Prettier, ES6 code snippets
-Node.js, asennus käyttäen NVM (Node Version Managment)

Video 5
-Demo työkalujen asennukseen

Video 6
-Ensimmäisen applikaation luonti
-stringing luonti ja tulostaminen
3 eri tapaa: ’ ’, ” ”, ``,

Video 7
-Kommentin luonti
-yhden rivin kommentti // kommentti //
-monen rivin kommentti /*
tekstiä
*/
-pikakomennot ctrl + /

video 8
-demo kommenttien luontiin

video 9
-muuttujien määrittäminen
-var
-let
-const
-käytä yleensä const, let silmukoissa, var ei niin tärkeä

video 10
-demo muuttujien käytöstä
-var hello = ”Hello”; (string)
-if (true) {
let world = “Hello World”;
} (loop)
-const aaron = “Aaron”; (string)

video 11
-stringien käyttöä, yhdistelyä
- + operaattori
-let1 str1 = “Hello “;
-let2 str2 = “World”:
-console.log(str1 + “ “ + str2)
video 12 
-demo stringien käytöstä

video 13
-stringien formatointi
-let str1 = “JavaScript”;
-${str1}

 video 14
-demo stringien formatoinnista

video 15
-datatyyppejä
-numero (float), string, Boolean, date, function? array/taulukko, object?
-NaN, null, undefined
-numeroita ja tekstiä voi yhdistää stringiksi
-tripla === operaattori testaamiseen

video 16
-datayyyppien demoja
const people = […] taulukko
const one = 1  float/int
const str = ”Hello” string
const person = {
firstName =  “Aaron”
lastName = “Powell”
};

function sayHello(person) {
console.log(“Hello “ + person.firstName);

-typeof
-console.log(typeof people);

-instanceof
-console.log(people instanceof Array);

video 17
-matematiikka
let num1 = 100;
console.log(num1 + - * /…

video 18
-matematiikka demoja
plus lasku +
minus –
kertolasku *
jakolasku / 
%
++
--
Math.PI
math.sqrt(num1)

video 19
-string muuntaminen numeroksi
-parseInt() ja parceFloat()
-toString()

video 20
-demo stringin muuttamisesta numeroksi
-console.log(parseInt(”100”));
-console.log(parseInt(num1));
-console.log(num1.toString));

video 21
-virhekäsittely try/catch/finally
-try monitoroi koodia, joka saattaa antaa virheen
-catch käsittelee koodin, kun tulee virhe
-finally ohjaa koodia jos ei tule virhettä

video 22
-demo virhekäsittely

video 23
-dates/päivämäärät
-objekti
-Date = päivämäärä ja aika
-const now = new Date();
-kuukausi alkaa nollasta 0 = tammikuu
-viikonpäivä 0 = sunnuntai
-const randomDate = new Date(2015, 3, 12, (päivämäärä) 6, 25, 58 (kellonaika));
-arvojen asettaminen
-const now = new Date();
now.setFullYear/setMonth/setDate
-now.setHours/minutes/seconds

video 24
-demo päivämääristä
-const now = new Date();
-const win95launch = new Date(1995, 7, 24);
-console.log(now);
-console.log(win95launch);

video 25
-boolean ja if lauseke
< pienempi
<= pienempi tai yhtäpieni
> isompi
> isompi tai yhtä suuri
== yhtäkuin
=== tarkistaa samat arvot ja datatyypit, suositus käytää
! = käänteinen, 
!==, suositus käyttää
== tarkistaa datatyypit
-if lausekkeet
-if, else if, else

video 26
-demo Boolean ja if lauseke syntaksi
-muista ===

video 27
-switch lauseke ja boolean syntaksi
-! kääntää lausekkeen arvon
-string on Case sensitive eli isot ja pienet kirjaimet luovat eri arvot
-and (molempien pitää olla tosi) & ja &&
-or (toisen pitää olla tosi) | ja ||
-suositus && ja ||
Switch (case) lauseke
case tarkistaa tasa-arvon
break;

video 28
demo Boolean ja switch ja muut syntaksit
case senitive syntaksi
toUpperCase muuntaa pienet kirjaimet isoksi
else if (status === 400) || (or) status === 500)
switch (status) {
case 200:
muista break;
switch etsii samaa arvoa

video 29
taulukon luonti
let arrayLenght = 5;
let arr1 = []; (0)
let arr2 = Array (arrayLenght); (5)

video 30
demo taulukon luonti

video 31
taulukkoon lisääminen
indeksi alkaa nollasta
let arr1 = [“A”, true, 2];
console.log(arr1[0]);

let arrayLenght = 2;
let arr2 = Array(arrayLenght);
arr2[0] = “Value at index 0”;

pituus ja index

video 32
demo datan lisääminen taulukkoon
dataa voi lisätä taulukkoon joko taulukkoa luodessa tai myöhemmin

video 33
taulukon muokkaustapoja
push and pop – vaikuttaa tauluko loppuun
array.push(values) lisää yhden tai enemmän arvon taulukon loppuun ja palauttaa uuden pituuden
array.pop() poistaa arvon taulukon lopusta ja palauttaa poistetun arvon

shift and unshift – affects front of array
array.shift() poistaa arvon taulukon alusta ja paluttaa poistetun arvon
aray.unshift(values) lisää yhden tai enemmän arvoja taulukon alkuun ja palauttaa uuden pituuden
concat- yhdistää 2 taulukkoa yhdeksi

video 34
demo taulukoiden muokkaustapoja
console.log(arr1.push(”new value”);
console.log(arr1.pop());
conslole.log(arr1.shift());
console.log(arr1.unshift(“new value”);
let newArr = arr1.concat(arr2);

video 35
silmukat
while
for
for of
while loop
let index = 0;
while (index < names.lenght) {
const name = names[index];
console.log(name);
index++;
}
for loop
for (let index = 0; index < names.length; index++) {
const name = names[index];
}
for of loop
for (let name of names)  {
console.log(name);
}

video 36
demo silmukoista

video 37
funktiot
suorittaa tehtävän käyttäen ohjeita. tekee koodista helpommin luettavan
esim.
function is CountingDown(var1, var1){
if (var1 > var2)
return true;
return false;
tai
function printHello(name) {
console.log(“Hello “+name+”!”);
}

printHello(“world”);

video 38
demo funktioista
function printHello() {
console.log(“Hello World”);
 }
console.log(typeof printHello);

video 39
nuolifunktio ja anonyymi funktio
=>
muuntaa tämän arvon kontekstissa
const add = (a, b ) => a + b;
console.log(add(1, 2)); //3

const subtract = (a, b) => {
return a – b;
};
this konteksti
perityy “vanhemmalta”
ei voida muuttaa

implicit return lauseke

video 40
demo nuolifunktio ja anonyymi funktio
const add = (a, b) => a + b;
console.log(add(1,2));
tai
const subtract = (a,b) => {
const result = a – b;
return result;
}
console.log(subtract(1,1));


video 41
Object Notation JSON
JavaScript Object Notation
kokoelma nimi-arvo pareja
järjestetty lista arvoille
const bookJSON = JSON.stringify(bookObj);
console.log(bookJSON);
{} yksittäinen objekti
[] monirivinen objekti
JSON.parse

video 42
demo JSON
JSON.stringify Metodi muuttaa objektit JSON sgtringiksi
JSON.parse metodi ei ota sntringiksi muutettua muotoa ja muta se takaisin objektiksi tai taulukoksi

video 43
Objektit
voidaan käyttää kuvaamaan oikean elämän esineitä, esim, kirja joka lainataan kirjastosta, ominaisuuksia, esim, kirjailija ja kirjailijan nimi
luonti:
const book = {
tavaraa…, pilkulla erotus
tavaraa,
} kurvisuluilla luodaan objekti



video 44
demo objektit
const book = {
title:”1984”,
author: ”George Orwell”,
isAvailable: false,
checkIn: function(){this.available = true; },
checkOut: function(){ this.isAvailable = false;}
};
const book = new Object();

piste notaatio: console.log(book2.author);
book2.author=”G. Orwell”;
console.log(book2);

sulkunotaatio
console.log(book2[“author”]);
book2[“author”]=”G. Orwell”;
console.log(book2);

video 45
Asynchronus programming
callback kutsuu, kun jokin tehtävä on suoritettu
function callback() {
console.log(”Timeout completed”);
Enter promises
lupaa, kun tehtävä on suoritettu, ilmoittaa koodin tuloksen tai pääsyn koodiin
esim syntaksi
function promiseTimeout(ms) {
return new Promise((resolve, reject) => {
setTimeout(resolve, ms);
});
}
-promise object
-kutsu resolve kun operaatio onnistuu
-kutsu reject kun opraatio epäonnistuu

promiseTimeout(2000)
.then(() => {
console.log(”done”);
return Promise.resolvew(42);
-then called on success (resolve)
-oikopolku onnistuneelle promise
-pass value to next handler

video 46
demo promises ja long running operations

video 47
Asynch/Await
saa asynkronoidun koodin näyttämään synkronoidulta
esim
async functiom simulateLongOperation() {
await promiseTimeout(1000);
return 42;
}

async function run() {
const answer = await simulateLongOperation();
console.log(answer);
}

video 48
async/await demo
luotu Promise päälle
function promiseTimeout(ms) {
return new Promise((resolve, reject) => {
setTimeout(resolve, ms);
});
}

async function run() {
console.log(“start”);
await promiseTimeout(2000);
console.log(“stop”);
}

run();

video 49
package management, pakettihallinta
paketti on uudelleenkäytettävä pätkä koodia tai osia
valmiita paketteja käyttämällä ei tarvitse itse kirjoittaa jokaista riviä koodia

video 50
demo pakettihallinta
npm init -y pikanäppäin luo package.json
npm install –save-dev prettier 
npm run format
npm install express
node index.js
npm start
npm install dotenv
const port ei saisi olla näkyvillä koodissa

video 51
next steps
