'use strict';

// Бинарный поиск
function binary_search(arr, item) {
    let low = 0,
        high = arr.length - 1, 
        mid = null, 
        guess = null;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        guess = arr[mid];

        if (guess === item) {
            return mid;
        } else if (guess < item) {
            low = mid + 1;
        } else if (guess > item) {
            high = mid - 1;
        }
    }

    return null;
}