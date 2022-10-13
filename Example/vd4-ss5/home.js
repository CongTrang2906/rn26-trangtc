let age // undefined
let c = true // boolean
let b = 1 // number
let a = 'tring' // string


// object
let obj = {
        name: 'Truong Cong Trang',
        age: 23,
    }
    //arr
let arr = [1, 2, 3, 4]

console.log(b);
console.log('boolean', c);
console.log(obj);
// console.log(obj.name);
console.log(arr);
console.log(arr[0]);

//function
function testFunc() {
    console.log('testFunc')
}
testFunc()

let n1 = 0

function plus() {
    n1 += 1
    console.log(n1)
}
var myFunction = function() {
    alert('Hello \'my friend');
}
alert('Alo');

function changeText(id) {
    id.innerHTML = "Ooops!";
}

var boxElement = document.querySelector('.box');
boxElement.innerHTML = '<h2>NEW HEADING</h2>';
console.log(document.querySelector('h2').innerHTML)

function ConfirmDelete() {
    var name = confirm('ARE YOU TO DELETE THIS ITEM?');
    alert('You select: ' + name);
}
document.getElementById("demo").innerHTML = "HELLO.";