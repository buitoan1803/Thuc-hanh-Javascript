// Bài 1: Ngày trong tuần

// let day = Number(prompt("Nhập ngày:"));

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;
    
//     case 3:
//         console.log("Wednesday");
//         break;
    
//     case 4:
//         console.log("Thursday");
//         break;
    
//     case 5:
//         console.log("Friday");
//         break;
    
//     case 6:
//         console.log("Saturday");
//         break;
    
//     case 7:
//         console.log("Sunday");
//         break;
    
//     default:
//         console.log("Invalid day")

// }

// Bài 2: Máy tính mini
// let a = Number(prompt("Nhập số thứ nhất"));
// let b = Number(prompt("Nhập số thứ hai"));
// let op = prompt("Nhập phép tính (+ - * /)");

//  if(op === "/" && b ===0){
//     console.log("Không thể chia cho 0")
// }

// switch(op){

//     case "+":
//         console.log(a + b);
//         break;
//     case "-":
//         console.log(a - b);
//         break;
//     case "*":
//         console.log(a * b);
//         break;
//     case "/":
//         console.log(a / b);
//         break;
//     default:
//         console.log("Phép tính không hợp lệ");
        
// }

// Bài 3: 
let month = Number(prompt("Nhập tháng:"));

switch(month){
    
    // Mùa đông
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;

    // Mùa xuân
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    // Mùa hạ
    case 6:
        case 7:
            case 8:
                console.log("Summer");
        break;

        
    case 9:
        case 10:
            case 11:
                console.log("Autumn");
        break;

    default:
        console.log("Invalid month");
    
}