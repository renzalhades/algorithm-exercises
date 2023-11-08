let arr = [5, 4, 3, 2, 1, 5, 6, 4, 8, 10, 10, -13];
let arr2 = [3, 2, 1, 2, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let arr3 = [5, 4, 3, 2, 1];

function bubbleSort (data) {
    let n = data.length;
    let step = 1;
    console.log('0    ' + data);

    for (n; n>0; n--) {
        for (i=0; i<n; i++) {
            if (data[i]> data[i+1]) {
                [data[i], data[i+1]] = [data[i+1], data[i]];
                console.log(step + '   ' + data);
                step++;
            }
        }
    }
}

bubbleSort (arr3);