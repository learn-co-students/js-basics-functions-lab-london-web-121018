// Code your solution in this file!
function distanceFromHqInBlocks(number) {
    return number >= 42 ? number - 42 : 42 - number    
}

function distanceFromHqInFeet (number) {
    return distanceFromHqInBlocks(number) * 264
}

function distanceTravelledInFeet(start, end) {
return start > end ? (start-end) * 264 : (end - start) * 264
}

function calculatesFarePrice(start, end) {
    let distance = distanceTravelledInFeet(start, end);
    if (distance < 400) {
        return 0;
    }
    else if (399 < distance && distance < 2001) {
        return (distance - 400)* 0.02;
    }
    else if (1999 < distance && distance < 2501) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }

}