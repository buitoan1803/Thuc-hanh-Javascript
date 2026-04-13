let score = Number(prompt("Nhập điểm:"))

if(score < 0 || score > 10){
    console.log("Điểm không hợp lệ");
}else if(score >= 9){
    console.log("Xuất sắc");
}else if (score >= 8){
    console.log("Giỏi");
}else if(score >= 6.5){
    console.log("Khá");
}else if(score >=5){
    console.log("Trung bình");
}else{
    console.log("Yếu");
}
