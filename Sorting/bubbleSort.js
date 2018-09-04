var arr = [6,4,1];

bubbleSort(arr);

function bubbleSort (arr) {
    let cont = 0;
    while(1) {
        let flag = true;
        for (let i=0;i<arr.length-1;i++) {
            if (arr[i]>arr[i+1]) {
                const temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                console.log(arr)
                flag = false;
                cont ++;
            }
        }
        if (flag) break;
    }
    return arr;
}