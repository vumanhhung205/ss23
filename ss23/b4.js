let a =+ parseInt(prompt("Nhập số nguyên dương a:"));
let b =+ parseInt(prompt("Nhập số nguyên dương b:"));
if (a > 0 && b > 0) {
    console.log("Các số chia hết cho", b, " từ 1 đến", a, "là:");
    let i = 1;
    while (i <= a) {
        if (i % b === 0) {
            console.log(i);
        }
        i++;
    }
} else {
    console.log("Vui lòng nhập hai số nguyên dương.");
}