
// let btn = document.getElementById('btn');
// let fieldNumber = document.getElementById('inpt');

// btn.addEventListener("click", function (){

//     return alert(fieldNumber.innerText = fieldNumber.value)
// })

// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }

// alert( fib(3) );
// alert( fib(4) );
// alert( fib(5) );
function fib() {
    let loop = [1, 1];
    let btn = document.getElementById('btn');
    let number=document.getElementById('txtloop').value;
    for (let i = 2; i < number; i++)
     loop[i] = loop[i-1]+ loop[i-2];
     btn.addEventListener("click", function (fib){

        document.getElementById('output').innerHTML=loop[number-1];
})
      
}