let arr = [5, 4, 3, 2, 1, 5, 6, 7, 8, 10, 10];
let arr2 = [3, 2, 1, 2, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let arr3 = [5, 4, 3, 2, 1];

function insertionSort (data) {
    let n = data.length;
    let temp = 0;
    let step = 0;
    console.log('0    ' + data);

    for(i=0; i<n; i++) {
        temp = data[i+1];
        j=0;
        
        while (j<=i && data[i-j]>temp) {
            data[i-j+1] = data [i-j];
            data [i-j] = temp;
            step++;
            j++  
            console.log(step + '   ' + data);
        }
    }
}

insertionSort(arr3);