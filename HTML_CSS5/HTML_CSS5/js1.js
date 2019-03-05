let b = 12;
const c = 123;
var num = 50;

const arr = [1, 2, "wow", "다 됨", num, "변수도되네!"];

const what = {
    id: "sus",
    age: 5,
    good: true,
    arr2: ["배열", 1, 2, "엄청 편함."]
}
console.log(num - c + b);
console.log(what.arr2);

console.log(console, "console도 오브젝트임");

function Hello(name,age) {
    console.log("My name is",name," i'm",age);
}

Hello("seong", 20);

function Example(name, age) {
    return `My name is ${name} i'm ${age}`;
}

const str = Example("jeong", 15);
console.log(str);

const calculator = {
    add: function (num1, num2) {
        return num1 + num2;
    },
    subtract: function (num1, num2) {
        return num1 - num2;
    }
    
};

const plus = calculator.add(5, 5);
const sub = calculator.subtract(10, 5);
console.log(plus);
console.log(sub);

const A = document.getElementById("A");
A.innerHTML = "HAHAHAHA";
document.querySelector
A.style.color = "blue";
document.title = "TOP OF TOP"; 
const title = document.querySelector("#A");

function handleResize(event) {
    console.log(event);
}

window.addEventListener("resize", handleResize);

const BASE_COLOR = "white";
const OTHER_COLOR = "black";

function clickColor() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    }
    else {
        title.style.color = BASE_COLOR;
    }
};

title.addEventListener("mouseenter", clickColor)