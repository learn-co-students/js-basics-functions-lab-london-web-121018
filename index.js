// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block >= 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
};

function distanceFromHqInFeet(block) {
  let blockDistance = distanceFromHqInBlocks(block);
  return blockDistance * 264;
};

function distanceTravelledInFeet(start, destination) {
  if (start >= destination) {
    var distanceInBlocks = start - destination;
  } else if (start < destination) {
    var distanceInBlocks = destination - start;
  }
  return distanceInBlocks * 264;
};

function calculatesFarePrice(start, destination) {
  let distanceTravelled = distanceTravelledInFeet(start, destination);
  let distanceTravelledLessFree = distanceTravelled - 400;
  if (distanceTravelledLessFree >= 2100) {
    return 'cannot travel that far';
  }
  else if ((distanceTravelledLessFree > 0) && (distanceTravelledLessFree <= 2000) && (distanceTravelledLessFree < 1600)) {
    return (distanceTravelledLessFree * 0.02);
  }
  else if (distanceTravelledLessFree <= 400) {
    return 0;
  }
  else {
    return 25;
  }
}
