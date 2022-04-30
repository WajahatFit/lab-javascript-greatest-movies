// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);



// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arry) {
  const allDirectors = arry.map(function (arry) {
    return console.log(arry.director)
  } )
  return allDirectors;
}
//console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const dramasDircSteven = arr.filter(function(movies) { 
    if (movies.director === 'Steven Spielberg' && movies.genre.includes('Drama'))  {
      return true;
    }
  });
  return dramasDircSteven;
}
console.log(howManyMovies(movies));

//console.log(movies.score);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  let movieScore = arr.map(number => number.score);
  let movieScoreNumber = movieScore.filter(element => {
    if (typeof element === 'number'){
      return element
    }
  })
  let sum = movieScoreNumber.reduce((acc,val) => {acc = acc + val
  return acc},0);
  let result = sum / movieScore.length;
  let twoDecimals = result.toFixed(2);
  return Number (twoDecimals)  

};
//console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arry) {
  let dramaMovies = arry.filter(movies => movies.genre.includes('Drama'));
  let totalScore = dramaMovies.reduce((acc,val) => {
      acc += val.score
      return acc
    },0);
  let dramaMoviesAvg = Number(totalScore / dramaMovies.length).toFixed(2);
  return dramaMoviesAvg;
}

dramaMoviesScore(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const order = [...arr].sort((movie, movie1) => movie.year - movie1.year);
  return order;
}
orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const orderAlp = [...arr].sort((a,b) => a.title - b.title);
  return orderAlp;
}
orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  //const turnHrsInMin = arr.map((elem)element.duration)
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
