/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){
    const arr2 = [...arr];   // copy of original array
    arr2.sort(function(a,b){ // sort the array (copy, not original)
    if (a.year < b.year){
        return -1;
    } else if (a.year > b.year){
        return 1;
    } else {
        return 0;
    }
});
    return(arr2);
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function dramaSpielberg(arr) {
    const arr2 = arr.filter(function(e){
        return e.genre.includes("Drama") && e.director === "Steven Spielberg";
    });
    return arr2.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    const arr2 = [...arr]; 
    const arrSorted = arr2.sort(function(a,b){
        if (a.title < b.title){
            return -1;
        } else if (a.title > b.title){
            return 1;
        } else {
            return 0;
        }
    });
    const arr20 = arrSorted.slice(0,20);

    const titles20 = arr20.map(function(movie){
        return movie.title;
    });
    return titles20;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
