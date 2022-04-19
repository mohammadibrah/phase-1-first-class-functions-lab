// Code your solution in this file!
const returnFirstTwoDrivers = (driversArray) => [driversArray[0], driversArray[1]];
const returnLastTwoDrivers = (driversArray) => [driversArray[driversArray.length-2], driversArray[driversArray.length-1]];

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(element){
    return (fare) => element * fare;
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare);
}
const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(driversArray, callpack){
    return callpack(driversArray);
}
// console.log(fareDoubler(4));