// Code your solution here:
function driversWithRevenueOver(drivers, rev){
    const filteredArray = drivers.filter(function (driver) {
        return driver['revenue'] > rev;
    });
    return filteredArray;
}

function driverNamesWithRevenueOver(drivers, rev){
    return driversWithRevenueOver(drivers, rev).map(function(drv){
        return drv['name'];
    });
}

function exactMatch(drivers, attr){
    return drivers.filter(function (driver) {
        return driver[Object.keys(attr)[0]] === attr[Object.keys(attr)[0]];
    });
}

function exactMatchToList(drivers, attr){
    return exactMatch(drivers, attr).map(function(drv){
        return drv['name'];
    });
}