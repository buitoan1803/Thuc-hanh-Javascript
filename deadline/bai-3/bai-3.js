const students = [
 {name: 'Alice', gpa: 3.8},
 {name: 'Bob', gpa: 3.8},
 {name: 'Charlie', gpa: 3.9},
 {name: 'David', gpa: 3.7}
]
students.sort((a, b) => {
    if(a.gpa !== b.gpa){
        return b.gpa - a.gpa; // giảm đần
    }

    return a.name.localeCompare(b.name); // sắp xếp chữ cái từ A - Z
});
console.log(students);



// let s1 = students[0];
// let s2 = students[1];
// let s3 = students[2];
// let s4 = students[3];

// function swap(a , b) {
//  let temp = a;
//  a = b;
//  b = temp;
//  return [a,b];
// }

// if (s1.gpa < s2.gpa || (s1.gpa === s2.gpa && s1.name > s2.name)){
//  let temp = s1;
//  s1 = s2;
//  s2 = temp;
// }


// if (s2.gpa < s3.gpa || (s2.gpa === s3.gpa && s2.name > s3.name)){
//  let temp = s2;
//  s2 = s3;
//  s3 = temp;
// }

// if(s3.gpa < s4.gpa || (s3.gpa === s4.gpa && s3.name > s4.name)){
//  let temp = s3;
//  s3 = s4;
//  s4 = temp;
// }

// if(s1.gpa < s2.gpa || (s1.gpa === s2.gpa && s1.name > s2.name)){
//     let temp = s1;
//     s1 = s2;
//     s2 = temp;
// }

// if(s2.gpa < s3.gpa || (s2.gpa === s3.gpa && s2.name > s3.name)){
//     let temp = s2;
//     s2 = s3;
//     s3 = temp;
// }

// console.log(s1);
// console.log(s2);
// console.log(s3);
// console.log(s4);