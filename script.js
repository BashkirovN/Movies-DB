/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
//=========================================================//
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start()    {
    do {
        numberOfFilms = +prompt("How many movies did you watch?", "");
    } while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};
/*
let movieOne  = prompt("One of the movies you watched lately:", ""),
    movieOneRate = prompt("How did you like it (1-10)?", ""),
    movieTwo  = prompt("One of the movies you watched lately:", ""),
    movieTwoRate = prompt("How did you like it (1-10)?", "");
*/
function rememberMyFilms()   {
    for (let i = 0; i < 2; i++) {
        let a = prompt("One of the movies you watched lately:", ""),
            b = prompt("How did you like it (1-10)?", "");
        if (a != null && b != null && a.length > 0 &&  b.length > 0 && a.length < 50)   {
            personalMovieDB.movies[a] = b;
        }   else {
            i--;
        }  
    }
}

function detectPersonalLevel()  {
    if (personalMovieDB.count < 10) {
        console.log("Too few movies");
    } else if (personalMovieDB.count < 30)  {
        console.log("Good enough");
    }  else if (personalMovieDB.count >= 30)    {   
        console.log("You are a maniac");
    }   else {
        console.log("Error");
    }
}
/*
    personalMovieDB.movies = {
        [movieOne]: movieOneRate,
        [movieTwo]: movieTwoRate
    };
    */

function showMyDB(hidden) {
    if (!hidden)   {
        console.log(personalMovieDB);
    }
}

function writeYourGenres()  {
    for (let i = 1; i < 4; i ++)    {
        personalMovieDB.genres[i - 1] = prompt(`Your favoritee genre number ${i}`, '');
    }
}

start();
rememberMyFilms();
writeYourGenres();
detectPersonalLevel();
showMyDB(personalMovieDB.private);