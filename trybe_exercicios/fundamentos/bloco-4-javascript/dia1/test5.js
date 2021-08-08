const a = -50;
const b = 60;
const c = 60; 

if (a > 0 && b > 0 && c > 0) {
    console.log(a + b + c === 180);
}
else if (a < 0 || b < 0 || c < 0) {
    console.log("Um triângulo não pode ter um ângulo com valor negatiovo");
}
