function findFloor(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    closestVal = 0

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal < val) {
            leftIdx = middleIdx + 1;
            closestVal = middleVal
        } else if (middleVal > val) {
            rightIdx = middleIdx - 1;
        } else {
            return middleIdx;
        }
    }
  
    if(closestVal < val)
        return closestVal
    return -1;
}

module.exports = findFloor