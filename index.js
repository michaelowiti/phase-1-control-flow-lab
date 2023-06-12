function scuberGreetingForFeet(feet){
  // Write your code here!
  let ride
  if(feet<=400){
    ride = `This one is on me!`;
    return ride;
  }
  else if(feet>2000){
    ride =`I will gladly take your thirty bucks.`;
    return ride;
  }
  else if(feet>2500){
    ride = `No can do.`;
    return ride;
  }
  }
scuberGreetingForFeet(199)
scuberGreetingForFeet(2001)
scuberGreetingForFeet(2501)

function ternaryCheckCity(city){
  // Write your code here!
  let answer
  if(city=`NYC`){
  answer =`Ok, sounds good.`;
  return answer;
}
else if(city!=`NYC`){
  answer = `No go.`;
  return answer;
}
}
ternaryCheckCity(`NYC`)
ternaryCheckCity(`Pittsburgh`)

function switchOnCharmFromTip(tip){
  // Write your code here!
  let appreciation
  if(tip =`generous`){
    appreciation = `Thank you so much.`;
    return appreciation;
    }
    else if(tip=`not as generous`){
      appreciation = `Thank you.`;
      return appreciation
    }
    else{
      appreciation =`Bye.`;
      return appreciation;
    }
    
}
switchOnCharmFromTip(`generous`)
switchOnCharmFromTip(`not as generous`)
switchOnCharmFromTip(`thanks for everything`)
