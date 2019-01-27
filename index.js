// Code your solution in this file!
function distanceFromHqInBlocks(x){
  if ((x-42)>0){
    return (x-42)
  }
    else{
      return ((x-42)*-1)
    }
}
function distanceFromHqInFeet(x){
  return distanceFromHqInBlocks(x)*264
}

function distanceTravelledInFeet(x,y){
  if ((x-y)>0) {
    return (x-y)*264
  } else {
      return (x-y)*-264
  }
}

function calculatesFarePrice(x, y){
  if (distanceTravelledInFeet(x,y) >2500) {
    return 'cannot travel that far'
  } else if (distanceTravelledInFeet(x,y) < 2000 && distanceTravelledInFeet(x,y)>400){
      return (distanceTravelledInFeet(x,y)-400)*0.02
  } else if (distanceTravelledInFeet(x,y) <= 400){
      return 0
  } else if (distanceTravelledInFeet(x,y) > 2000){
      return 25
    }
}
