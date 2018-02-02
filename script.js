//when the button is clicked
//translate the sentence
//show the result

var userInput = document.querySelector('input');
var vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [ ];

document.querySelector('form.main-form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(userInput.value);
});


// function translateSentence() {
//     for (var i = 0; i < userInput.length; i++) {
//         for (var j = 0; j < vowels.length; j++) {
//             if (userInput[i] === vowels[j]) {
//                 resultArray.push(userInput[i]);
//             }
//         }
//
//         if (userInput[i] === 'e' || userInput[i] === 'u') {
//             resultArray.push(userInput[i]);
//         }
//     }
//
//     console.log(resultArray.join('').toUpperCase());
// };
