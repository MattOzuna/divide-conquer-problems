function findRotatedIndex(arr, val) {

    pivotPoint = findPivotPoint(arr)
    if(arr[arr.length - 1] < val)
        return binarySearch(arr, val, 0, pivotPoint)
    else if(arr[arr.length -1] > val)
        return binarySearch(arr, val, pivotPoint, arr.length -1)
}

function binarySearch(arr, val, start, end){
    leftIdx = start
    rightIdx = end
    
    while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < val) {
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      rightIdx = middleIdx - 1;
    } else {
      return middleIdx;
    }
  }
  
  return -1;

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

module.exports = findRotatedIndex