// Code your solution here:
function driversWithRevenueOver(driversArr, revenue){
    return driversArr.filter(function(dr){
        return dr.revenue > revenue
    })
}

function driverNamesWithRevenueOver(driversArr, revenue){
    return driversWithRevenueOver(driversArr, revenue).map(function (dr){
        return dr.name
    })
}

function exactMatch(driversArr, x){
    return driversArr.filter(function(dr){
        let revAttr = false
        for(const key in x){
            revAttr = dr[key] === x[key] // i don't get this line
        }
        return revAttr
    })
}

function exactMatchToList(driversArr, x){
    return exactMatch(driversArr, x).map(function(dr){
        return dr.name
    })
}