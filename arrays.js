const express = require('express');
const router = express.Router();

let numbers = [1,2,3,4,5,6,7,8,9,10]


router.get('/arrays/even-numbers', (req, res) => {
    let evenNumbers = numbers.filter(number => number % 2 === 0);
    res.json(evenNumbers);
});

//return only ages above 18
let arrayOfAges = [10, 20, 30, 15, 17, 25]
router.get('/arrays/adult-ages', (req, res) => {
    let above18 = arrayOfAges.filter(age => age > 18);
    res.json(above18);
});

//return words longer than 5 characters
let words = ['apple', 'banana', 'mango', 'kiwi', 'orange', 'grapes']
router.get('/arrays/long-words', (req, res) => {
    let longWords = words.filter(word => word.length > 5);
    res.json(longWords);
});

//return the files that are smaller than a given size. The given size is a filter parameter
let filesSize = [50, 200, 75, 120, 30, 90, 150]
router.get('/arrays/files-size', (req, res) => {
    let size = req.query.filterParam;
    let smallerFiles = filesSize.filter(file => file <= size);
    res.json(smallerFiles);
});

module.exports = router;