const a = [10,0,97,-30,5];

console.log(selectionSort(a))

function selectionSort(a) {

    let arr = a;

    for (let i=0; i<arr.length; i++) {
        let minIndex = i;
        for (let j=i+1; j<arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}