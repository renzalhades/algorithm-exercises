data = [2, 8, 5, 2, 3, 9, 8, 6, 5, 5, 3, 4, 1, -3, -6, , 8, 13, 5, 6];

function minMax (data) {
    min =0;
    max=0;
    for (i=0;i<data.length;i++) {
        if (min > data[i]) {
            min = data [i];
        } 
        else {
        }

        if (max < data[i]) {
            max = data [i];
        } 
        else {
        }
    }
    console.log (min +' and ' + max)
}
minMax (data);