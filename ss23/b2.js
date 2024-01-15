let num =+ parseInt(prompt("Nhập một số nguyên dương:"));
if (num > 0) {
    let fac = 1;
    let i = 1;

    do {
        fac *= i;
        i++;
    } while (i <= num);

    console.log("Giai thừa của", num, "là:", fac);
} else {
    console.log("Vui lòng nhập một số nguyên dương.");
}