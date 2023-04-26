// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  const bodyMeasure = weight / height ** 2;
  if (bodyMeasure <= 18.5) {
    return "Underweight";
  } else if (bodyMeasure <= 25.0) {
    return "Normal";
  } else if (bodyMeasure <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(bmi(61, 1.6))
//Takes kgs and meters 

//Complete the function that accepts a string parameter, and reverses each word in the string
//All spaces in the string should be retained.

function reverseWords(str) {
    return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
  }

console.log(reverseWords('What\'s worse then a child?' ))
  

/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"*/

function dog_names() {
  for(i = 0; i <dog_name_length; i++) {
    console.log(dog_string.search(dog_names[i])>=0?"Matched dog_name": "No matches")
  }
};

/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

Given_arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
  for (let i=0; i<arr.length, i++){
    if(i%2 ==0){
      arr.splice(i,1,"even index")
    }
  }
}

console.log(replaceEvens(given_arr))