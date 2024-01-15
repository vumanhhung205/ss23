let number = Math.floor(Math.random() * 10) + 1;
let guessedCorrectly = false;
while (!guessedCorrectly) {
    let sonhap = parseInt(prompt("Nhập vào một số từ 1 đến 10:"));
    if (sonhap > number) {
        console.log("Lớn hơn! Hãy thử lại.");
    } else if (sonhap <number) {
        console.log("Nhỏ hơn! Hãy thử lại.");
    } else {
        console.log("Chính xác! Bạn đã đoán đúng.");
        guessedCorrectly = true;
    }
}