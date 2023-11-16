function findRotationCount(arr) {
    if(arr[0] < arr[arr.length - 1])
        return 0
    
    pivotPoint = findPivotPoint(arr)
    return pivotPoint
}

function findPivotPoint(arr){
    if(arr[0] < arr[arr.length - 1])
        return 0

    let leftIdx = 0
    let rightIdx = arr.length -1

    while (leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
        if (arr[middleIdx] > arr[middleIdx +1])
            return middleIdx + 1
        else if (arr[leftIdx] <= arr[middleIdx])
            leftIdx = middleIdx + 1
        else
            rightIdx = middleIdx - 1
    }
}

module.exports = findRotationCount