function sortedFrequency(arr, val) {
    startValue = findStartIdx(arr, val)
    endValue = findEndIdx(arr, val)
    
    if (startValue !== -1 && endValue !== -1)
        return (endValue + 1) - startValue
    return -1
}

function findStartIdx(arr, val){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal < val) {
            leftIdx = middleIdx + 1;
        } else if (middleVal > val) {
            rightIdx = middleIdx - 1;
        } else if (middleVal === val && arr[middleIdx - 1] === val){
            rightIdx = middleIdx - 1;
        }else {
            return middleIdx
        }
    }
    return -1;
}

function findEndIdx(arr, val){
        let leftIdx = 0;
        let rightIdx = arr.length - 1;
    
        while (leftIdx <= rightIdx) {
            let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
            let middleVal = arr[middleIdx];
            if (middleVal < val) {
                leftIdx = middleIdx + 1;
            } else if (middleVal > val) {
                rightIdx = middleIdx - 1;
            } else if (middleVal === val && arr[middleIdx + 1] === val){
                leftIdx = middleIdx + 1;
            }else {
                return middleIdx
            }
        }
        return -1;
}


module.exports = sortedFrequency