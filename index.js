// Code your solution in this file!

function blocksToFeet(blocks) {
  return blocks * 264;
};

function feetToFare(distance){
  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  };
}

function negativeDistanceCheck(distance) {
  if (distance < 0) {
    distance *= -1;
  };
  return distance;
};

function distanceFromHqInBlocks(blocks) {
  return negativeDistanceCheck(blocks - 42);
};

function distanceFromHqInFeet(blocks) {
  return blocksToFeet(distanceFromHqInBlocks(blocks));
};

function distanceTravelledInFeet(startBlock, endBlock) {
  return blocksToFeet(negativeDistanceCheck(endBlock - startBlock));
};

function calculatesFarePrice(startBlock, endBlock) {
  let distance = distanceTravelledInFeet(startBlock, endBlock);

  if (distance > 2500) {
    return 'cannot travel that far'
  } else {
    return feetToFare(distance);
  };
};
