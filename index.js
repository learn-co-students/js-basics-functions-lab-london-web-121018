// Code your solution in this file!
function distanceFromHqInBlocks(streetBlock) {
  if (streetBlock > 42){
    return streetBlock - 42
  }   else if (streetBlock < 42){
        return 42 - streetBlock
      }
}

function distanceFromHqInFeet(streetBlock) {
  if (streetBlock > 42){
    return (streetBlock - 42)*264
  }   else if (streetBlock < 42){
        return (42 - streetBlock)*264
  }
}

function distanceTravelledInFeet(start, destination) {
  if (destination > start) {
      return (destination - start)*264
  }     else if (start > destination){
          return (start - destination)*264
  }
}

function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination)

  if (distance < 400) {
    return 0
  } else if (distance > 400 && distance < 2000){
      return (distance-400) * 0.02
  } else if (distance > 2000 && distance < 2500){
      return 25
  } else if (distance > 2500){
      return 'cannot travel that far'
  }

}
