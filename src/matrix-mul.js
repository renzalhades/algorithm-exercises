function matrixGenerate (col,row) {
    m = col;
    n= row;
    let matrix = new Array(m).fill(0).map(()=>Array(n).fill(0));
    for (i=0; i<m; i++) {
        for (j=0; j<n; j++) {
            matrix[i][j] =  prompt ('Enter a value:' )
        }
    }
    return matrix;
}

function matrixProduct (matA, matB) {
    let rowA = matA.length;
    let colA = matA[0].length;  // rowB;
    let colB = matB[0].length;
    product = new Array(rowA).fill(0).map(()=>Array(colB).fill(0));

    for (i = 0; i<rowA; i++) {
        for (j=0; j<colB; j++) {
            let sum = 0;
            let byProduct =0;
            for (k=0; k<colA; k++) {
                byProduct= matA[i][k]*matB[k][j];
                sum += byProduct;
            }
            product[i][j]=sum;
        }   
    }
    return product;
}

let matA = matrixGenerate (2,1);
let matB = matrixGenerate (1,1);
let matProd = matrixProduct(matA,matB)
console.log(matA);
console.log(matB);
console.log(matProd[14][0]);

// console.log (matrixProduct);
