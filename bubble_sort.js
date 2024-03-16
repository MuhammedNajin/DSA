

const arr = [3, 4,  8, 5, 8, 2,  7 , 10];


function bubbleSort(arr) {
    const length = arr.length;
    for(let i = 0; i < length; i++) {
        for(let j = i + 1; j < length; j++) {
            if(arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr));