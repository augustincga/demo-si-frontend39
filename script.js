var weather = "sunny";

// if (weather === "rainy") {
//   console.log("Bring an umbrella.");
// } else if (weather === "cloudy") {
//   console.log("Dress lightly.");
// } else if (weather === "sunny") {
//   console.log("Go outside.");
// } else {
//   console.log("Unknown weather type!");
// }


// switch (weather) {
//     case 'rainy':
//     console.log("Bring an umbrella.");
//     break;
//     case 'sunny':
//     console.log("Go outside");
//     break;
//     case 'cloudy':
//     console.log("Dress lightly.");
//     break;
//     default:
//     console.log("Unknown weather type!");
//     break;
//    }


var array1 = [];
array1.push(1);
array1.push(2);
array1.push(3);
array1.push(4);
array1.push(5);
console.log(array1);


var array2 = [1, 2, 3, 4, 5];
console.log(array2);


var array3 = [];
var index = 0;
// while(index < 5) { 
//     array3.push(index+1);
//     index = index + 1;
// }
do {
    array3.push(index+1);
    index = index + 1;
} while (index < 5);
console.log(array3);