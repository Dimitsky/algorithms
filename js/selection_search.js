'use strict';

// Ищет наименьшее значение
function findSmallest(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;

    for(let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

// сортировка выбором
function selectionSort(arr) {
    let copyArr = arr.concat(); // Используем копию
    let newArr = [];
    let smallestIndex = null;

    while (copyArr.length) {
        smallestIndex = findSmallest(copyArr);
        newArr.push(copyArr[smallestIndex]);
        copyArr.splice(smallestIndex, 1);
    }

    return newArr;
}