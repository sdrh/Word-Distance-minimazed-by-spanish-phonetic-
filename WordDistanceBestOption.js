const {distance, closest} = require('fastest-levenshtein')

// Print levenshtein-distance between 'fast' and 'faster' 
console.log(distance('sura', closest('sura', ['Zura', 'elezura', 'suda'])))
//=> 2
closest('Sura', ['Zura', 'elezura', 'suda'])
