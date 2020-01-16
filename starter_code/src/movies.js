/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
//const moviesTwo = [...movies];

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

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
