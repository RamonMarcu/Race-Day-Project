let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 19;

if(early && age > 18){
  raceNumber += 1000;
}

if(early && age > 18){
  console.log(`Race will begin at 9:30 am, your race number is: ${raceNumber}.`);
}
else if(!early && age >18){
  console.log(`Race will begin at 11:00 am, your race number is: ${raceNumber}.`);
}
else if(age < 18){
  console.log(`Race will begin at 12:30 pm, your race number is: ${raceNumber}.`);
}
else{
  console.log('Please go to registration desk, thanks!');
}

// depending on the values of the variables early and age, the result will be: he start time of your turn in the race and your race number or Please go to registration desk, thanks!
