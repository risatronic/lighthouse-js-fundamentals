let number = 100;

while (number >= 100 && number <= 200) {
    if (number % 3 + number % 4 === 0) {
        console.log("LoopyLighthouse");
    } else if (number % 3 === 0) {
        console.log("Loopy");
    } else if (number % 4 === 0) {
        console.log("Lighthouse");
    } else {
        console.log(number);
    }

    number++;
}