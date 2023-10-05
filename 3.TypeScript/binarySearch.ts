function binarySearch(array: number[], target: number): number {
    let left: number = 0;
    let right: number = array.length - 1;

    while (left <= right) {
        const mid: number = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            // Found the target
            return mid;
        } else if (array[mid] < target) {
            // Continue search on right side
            left = mid + 1;
        } else {
            // Continue search on left side
            right = mid - 1;
        }
    }

    // Target not found
    return -1;
}
