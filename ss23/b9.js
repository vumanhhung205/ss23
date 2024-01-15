let number =+ parseInt(prompt("Nhập vào một số nguyên dương:"));
if (number > 0) {
    console.log("Dãy Fibonacci nhỏ hơn", number, "là:");
    let a = 0, b = 1;
    let sum = 0;
    do {
        console.log(a);
        sum += a;
        let temp = a + b;
        a = b;
        b = temp;
    } while (sum < number);
} else {
    console.log("Vui lòng nhập một số nguyên dương lớn hơn 0.");
}