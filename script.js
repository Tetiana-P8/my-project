'use strict';


// alert('hello');

// const result = confirm('Are you here?');

// console.log(result);

// const answer = prompt('Вам есть 18?', '');

// console.log(answer);
 
// let age = prompt('Сколько тебе лет?', '');

// alert(`Тебе ${age} лет!`);

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies : {},
// 	actors : {},
// 	genres: [],
// 	ptivat: false
// };

// const lastOfFilms = prompt('Один из последних просмотренных фильмов?', ''),
// 	starOfFilms = +prompt('На сколько оцените его?', ''),
// 	lastOfFilms2 = prompt('Один из последних просмотренных фильмов?', ''),
// 	starOfFilms2 = +prompt('На сколько оцените его?', '');




// personalMovieDB.movies[lastOfFilms] = starOfFilms;
// personalMovieDB.movies[lastOfFilms2] = starOfFilms2;


// console.log(personalMovieDB);

// const objectA = {
// 	a: 10,
// 	b: true
// };

// const copyOfA = objectA;

// copyOfA.b = false;

// console.log(objectA);


// function a() {
// 	console.log('Hey there');
// }



// const a = () => {
// 	console.log('Hey there');
// };

// a();

const myCity = {
	city: 'New York',
	popular: true,
	country: 'USA',
	cityGreeting: function () {
		console.log('Hey');
	},
	cityGreetingsB() {
		console.log('Hey2');
	}
};

const myCityDouble = Object.assign({}, myCity);
const myCity3 = { ...myCity };
const myCity4 = JSON.parse(JSON.stringify(myCity));

myCity3.country = 'Ukraine';
myCity4.country = 'German';
myCityDouble.popular = false;

console.log(myCity);
console.log(myCityDouble);
console.log(myCity3);
console.log(myCity4);



myCity.cityGreetingsB();

delete myCity.popular;
console.log(myCity);

myCity['popular'] = true;
console.log(myCity);

const nationalOFCountry = 'national';

myCity[nationalOFCountry] = 'american';
console.log(myCity);




function printMyName() {
	console.log('Tetiana');
}
console.log('Start');
setTimeout(printMyName, 2000);