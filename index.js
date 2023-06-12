function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride <= 400) {
    return `This one is on me!`;
  } 
  else if (ride > 2000 && ride <=2500) {
    return `I will gladly take your thirty bucks.`;
  } else{
    return `No can do.`
  }

} 
  
scuberGreetingForFeet(199)
scuberGreetingForFeet(2001)
scuberGreetingForFeet(2501)

function ternaryCheckCity(city){
  let trueStatement=`Ok, sounds good.`
  let falseStatement=`No go.`
  return (city === 'NYC') ? trueStatement : falseStatement
  
}
ternaryCheckCity(`NYC`)
ternaryCheckCity(`Pittsburgh`)

function switchOnCharmFromTip(tip){
  // Write your code here!
  
  

  switch (tip){
    case `generous`:
      return `Thank you so much.`;
      break;
      case 'not as generous':
        return `Thank you.`
        break;
        default:
          return`Bye.`
  }
   
  }

switchOnCharmFromTip(`generous`)
switchOnCharmFromTip(`not as generous`)
switchOnCharmFromTip(`thanks for everything`)
