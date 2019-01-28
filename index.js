// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    let hq = 42;
    if (distance > hq){
        return distance - hq;
    }else{
        return hq - distance;
    }
}

function distanceFromHqInFeet(distance){
    let hq = 42;
    let num = 0;
    if (distance > hq){
        num = distance - hq;
        return num * 264;

    }else{
        num = hq - distance;
        return num * 264;
    }
}

function distanceTravelledInFeet(distance1, distance2){
    let num = 1320 / 5;
    let calculatedDist = 0;
    if (distance2 > distance1){
        calculatedDist = distance2 - distance1;
        return calculatedDist * num;

    }else{
        calculatedDist = distance1 - distance2;
        return calculatedDist * num;
    }
}

function calculatesFarePrice(start, destination){
    const oneBlockInFeet = 528 / 2;
    let distInFeet = 0;
    if (destination > start){
        calculatedDist = destination - start;
        distInFeet = (oneBlockInFeet * calculatedDist);

    }else{
        calculatedDist = start - destination;
        distInFeet = (oneBlockInFeet * calculatedDist);
    }

    if (distInFeet >= 400 && distInFeet <= 2000) {
        distInFeet-= 400;
        return (distInFeet / 100) * 2;
    }else if(distInFeet < 400){
        return 0;
    }else if (distInFeet > 2000 && distInFeet <= 2500){
        return 25;
    }else{
        return "cannot travel that far";
    }
}