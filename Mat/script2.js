let i = 5;
let t = setInterval(() => i < 1 ? clearInterval(t) : console.log(i--), 500);