// Code your solution in this file!

function distanceFromHqInBlocks(location){
    return Math.abs(42 - location);
}

function distanceFromHqInFeet(location){
    return (distanceFromHqInBlocks(location) * 264);
}

function distanceTravelledInFeet(start, end){
    return (Math.abs(start - end) * 264);
}

function calculatesFarePrice(start, destination){
    let sToD = distanceTravelledInFeet(start, destination);

    if (sToD <= 400){
        return 0;
    }else if (sToD > 400 && sToD <= 2000){
        return (sToD - 400) * 0.02;
    }else if (sToD > 2000 && sToD < 2500){
        return 25;
    }else {
        return 'cannot travel that far';
    }
}