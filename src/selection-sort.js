let arr = [5, 4, 3, 2, 1, 5, 6, 7, 8, 10, 10, -13];
let arr2 = [3, 2, 1, 2, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let arr3 = [5, 4, 3, 2, 1];

function selectionSort (data) {
    const n = data.length;
    step =1;
    console.log('0    ' + data);

    for (i=0; i<n; i++) {
        min = i;
        
        for (j=i+1; j<n; j++ ) {
            if (data[min]>data[j]) {
                min = j;
            }
        }

        if (min!=i) {
            [data[i], data[min]] = [data[min], data[i]];
            console.log(step + '   ' + data);
            step++;
        }
        else {
            console.log(step + '   ' + data);
            step++;
        }

    }
    
}

selectionSort (arr2);

