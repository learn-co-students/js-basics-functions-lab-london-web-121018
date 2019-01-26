// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    const dist = 42 - blocks;

    return Math.abs(dist);
};

function distanceFromHqInFeet(blocks) {
    distBlocks = distanceFromHqInBlocks(blocks);

    return distBlocks * 264;
};

function distanceTravelledInFeet(start, finish) {
    return (Math.abs(finish - start)) * 264;
};

function calculatesFarePrice(start, finish) {
    const dist = distanceTravelledInFeet(start, finish);
    let fare = 0;

     switch (true) {
         case dist < 400:
            fare =  0;
            break;
         case dist > 400 && dist < 2000:
            fare =  (dist - 400) * 0.02;
            break;
         case dist > 2000 && dist < 2500:
            fare =  25;
            break;
         case dist > 2500:
            fare =  'cannot travel that far';
            break;
     };
     return fare
}