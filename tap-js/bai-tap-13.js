// let i = 1;
// while (i <= 5){
//     console.log(i);
//     i++;
// }

// let i = 5;
// while (i > 0){
//     console.log(i);
//     i--;
// }

// let i = 2;
// while(i <= 10){
//     console.log(i);
//     i+=2;
// }

// let i = 1;
// while (i <= 10){
//     console.log(i + 1);
//     i+=2;
// }

// for (let i = 5; i > 0; i-- ){
//     console.log(i)
// }

// let i = 1;
// while(i <= 5){
//     let j = 1;
//     let row = "";

//     while(j <= i){
//         row = row + i;
//         j++;
//     }
//     console.log(row);
//     i++;
// }

// for (i = 1; i<= 5; i++ ){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//         row += i;
//     }
//     console.log(row);
// }

// let i = 1;
// while(i <= 5){
//     let j = 1;
//     let row = "";

//     while(j <= i){
//         row = row + j;
//         j++;
//     }
//     console.log(row);
//     i++;
// }

// for (let i = 1; i<= 5; i++ ){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//         row += j;
//     }
//     console.log(row);
// }

// Bảng cửu chương

// for(let j = 1; j <= 10; j++){
//     let i = 2;
//     console.log(i + " x " + j + " = " + (i*j));
    
// }

// let i = 2;
// let j = 1;

// while(j <= 10){
//     console.log(i + " x " + j + " = " + (i * j));
//     j++;
// }

// for(let i = 2; i<= 9; i++){
//     for( let j = 1; j <= 10; j++){
//     console.log(i + " x " + j + " = " + (i*j));
//     }
//     console.log("====================");
// }

// let i = 2;
// while(i <=9 ){

//     let j = 1;
//     while( j <=10 ){
//         console.log(i + " x " + j + " = " + (i * j));
//         j++
//     }
//     console.log("===========");
//     i++
// }

// let i = 5;

// while(i <= 5){
//     let j = 1;
//     let row = "";

//     while(j <= i){
//         row = row + "*";
//         j++
//     }

//     console.log(row);
//     i--
// }

// for(let i = 5; i <= 5; i++){
//     let row = "";
    
//     for (let j = 1; j <= i; j++ ){
        
//         row = row + "*"
//     }
//     console.log(row);
// }


// let i = 5;
// while (i > 0 ) {
//     let j = 1;
//     let row = "";

//     while(j <= i){
//         row += "*";
//         j++;
//     }
    
//     console.log(row);
//     i--;
// }

// for(let i = 5; i > 0; i--){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//         row += "*";
//     }
//     console.log(row);
// }

// for (let i = 1; i <= 5; i++ ){
//     let row = "";
    
//     for(let j = 1; j <= 5 - i; j++){
//         row += " ";
//     }

//     for(let j = 1; j <= i; j++){
//         row += "*";
//     }

//     console.log(row);
// }

// for (let i = 5; i > 0 ; i-- ){
//     let row = "";
    
//     for(let j = 1; j <= 5 - i; j++){
//         row += " ";
//     }

//     for(let j = 1; j <= i; j++){
//         row += "*";
//     }

//     console.log(row);
// }

// let i = 1;

// while(i <= 5){
    
//     let row = "";


//     let space = 1;
//     while(space <= 5 - i){
//         row = row + " ";
//         space++;
//     }

//     let star = 1;
//     while(star <= i){
//         row = row + "*";
//         star++;
//     }

//     console.log(row);
//     i++;
// }

// for (let i = 1; i <= 5; i++){
//     let row = "";

//     // space
//     for(let j = 1; j <= 5-i; j++){
//         row += " "
//     }

//     // star 
//     for(let j = 1; j <= 2*i -1; j++){
//         row += "*"
//     }
    
//     console.log(row);
// }



// for(let i = 4; i > 0; i-- ){
//     let row = "";

//     for(let j = 1; j <= 5 - i; j++){
//         row += " ";
//     }

//     for(let j = 1; j <= 2*i - 1; j++){
//         row += "*"
//     }
//     console.log(row);
// }


// let i = 5;

// while(i > 0){
//     let row = "";

//     let space = 1;
//     while(space <= 5 - i){
//         row += " ";
//         space++;
//     }

//     let star = 1;
//     while(star <= 2*i -1){
//         row += "*";
//         star++;
//     }
//     console.log(row);
//     i--;
// }
// let i = 1;
// while(i <= 5){
//     let row = "";
    
//     let space = 1;
//     while(space <= 5 - i){
//         row += " ";
//         space++;
//     }

//     let star = 1;
//     while(star <= 2*i - 1){
//         row += "*";
//         star++;
//     }

//     console.log(row);
//     i++;
// }

// for(let i = 1; i<= 5; i++){
//     let row = "";

//     // Space
//     for(let s = 1; s <= 5 - i; s++){
//         row += " ";
//     }

//     for(let j = 1; j <= 2*i -1; j++){
//         if(j === 1 || j === 2*i - 1 || i === 5){
//             row += "*";
//         }else{
//             row += " ";
//         }
//     }
//     console.log(row);
// }

// let i = 1;

// while(i <= 5){
//     let row = "";

//     // space
//     let s = 1;
//     while(s <= 5 - i){
//         row += " ";
//         s++;
//     }

//     // star
//     let j = 1;
//     while(j <= 2*i - 1){
//         if(j === 1 || j === 2*i -1 || i === 5){
//             row += "*";
//         }else{
//             row += " ";
//         }
            
//         j++;
//     }

//     console.log(row);
//     i++;
// }

// for (i = 1; i <= 5; i++){
//     let row = "";
//     for(j = 1; j <= 9; j++){
//         if(i === 1 || i === 5 || j === 1 || j === 9){
//             row += "*";
//         }else{
//             row += " ";
//         }
//     }
//     console.log( i + ":" + row);
// }