function scuberGreetingForFeet(aNumber){
  // Write your code here!
  if (aNumber <= 400){
    return 'This one is on me!'
  } else if (aNumber > 400 && aNumber < 2000) {
    return 'That will be twenty bucks.'
  } else if (aNumber > 2000 && aNumber <2500) {
    return 'I will gladly take your thirty bucks.'
  } else{
    return 'No can do.'
  } }

function ternaryCheckCity(city){
  // Writ"e your code here!
  let response;
 city === 'NYC'? response = "Ok, sounds good." : response = "No go.";
 return response;
}

function switchOnCharmFromTip(money){
  // Write your code here!
  switch (money) {
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
      return "Thank you."
    default: 
    return "Bye."
}
}
