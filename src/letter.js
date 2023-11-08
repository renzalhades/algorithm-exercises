const w=20, h =10;
let matrix = new Array(w).fill('*').join("");

for (i=0;i<h+1; i++) {
    if (i==0 || i == h || i==h/2 || i == h/2-0.5) {
        console.log(matrix);
    }
    else {
        console.log ('*');
    }
}


