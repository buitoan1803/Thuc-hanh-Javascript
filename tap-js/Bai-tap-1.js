// Bài tập 1: Kiểm tra số dương, số âm hay số 0
let number;
number = -5;
if(number > 0){
    console.log("Số dương");
} else if(number < 0){
    console.log("Số âm");
} else {
    console.log("Số 0");
}

// Bài tập 2: Kiểm tra tuổi
let age = 17;
if(age >= 18){
    console.log("Bạn đủ tuổi");
}else{
    console.log("Tuổi chưa đủ");
}

// Bài tập 3: Kiểm tra điểm

let score = 5;
if(score >= 8){
    console.log("Giỏi");
} else if(score >=5){
    console.log("Trung bình");
} else {
    console.log("Yếu");
}

// Bài tập 4: Kiểm tra đăng nhập
let isLogin = false;
if(true && !isLogin){
    console.log("Đăng nhập thành công");
} else { 
    console.log("Đăng nhập thất bại"); 
}
