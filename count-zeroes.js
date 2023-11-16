//L           R
//1,1,1,1,0,0,0

function countZeroes(arr) {
   
    leftidx = 0
    rightIdx = arr.length -1

    if (arr[leftidx] == 0)
            return arr.length

    while (leftidx < rightIdx){
        let middleIdx = Math.floor((leftidx+rightIdx)/2)
        let middleVal = arr[middleIdx]
        if ( middleVal == 0 && arr[middleIdx -1] == 1) {
            return (arr.length) - middleIdx
        }
        else if (middleVal == 1 && arr[middleIdx + 1] == 0)
            return (arr.length) - (middleIdx +1)
        else if (middleVal == 1 && arr[middleIdx + 1] == 1)
            leftidx = middleIdx + 1
        else if (middleVal == 0 && arr[middleIdx -1] == 0)
            rightIdx = middleIdx - 1
        else leftidx = middleIdx
    }

    return 0

//attempt with advanced array methods
//     if (arr.lastIndexOf(1) != -1)
//     return ((arr.length-1)-arr.lastIndexOf(1))
// else
//     return arr.length
}

module.exports = countZeroes