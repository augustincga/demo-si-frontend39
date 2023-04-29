console.log("it works");
var object1 = {
  name: "John Doe",
  gender: "M",
  height: 180,
  weight: 89,
};

var object2 = {
  name: "Mary Anne",
  gender: "F",
  height: 160,
  weight: 65,
};

var BMI1 = object1.weight / (((object1.height / 100) * object1.height) / 100);

var BMI2 = object2.weight / (((object2.height / 100) * object2.height) / 100);

console.log(BMI1);

if (BMI1 < 18.5) {
  console.log(object1.name + " is " + "underweight range");
} else if (BMI1 > 18.5 && BMI1 < 25) {
  console.log("normal");
} else if (BMI1 > 25 && BMI1 < 30) {
  console.log("overweight");
} else {
  console.log("obese");
}
