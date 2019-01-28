function distanceFromHqInBlocks(block){
  return Math.abs(42 - block);
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(block1, block2){
  return (Math.abs(block1 - block2)) * 264
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination) - 400
  if (distance < 0) {
    return 0
  } else if (distance > 0 && distance <= 1600){
    return distance * 0.02
  } else if (distance > 1600 && distance <= 2100){
    return 25
  } else {
    return 'cannot travel that far'
  }
}
