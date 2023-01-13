function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log( calc(1,2,sum));


/////////////el settimeout es un callback tambien//////////

setTimeout(() => {
    console.log("hola mundo");
}, 5000);

function hola(nombre) {
    console.log("hola como estas "+nombre+"?");
}

setTimeout(hola,2000,"david")