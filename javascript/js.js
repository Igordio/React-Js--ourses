let btn = document.getElementById('btn');
let fieldNumber = document.getElementById('inpt');

btn.addEventListener("click", function (){

    // return alert(fieldNumber.innerText = fieldNumber.value)
    return (fieldNumber.innerHTML = .document.createElement(p))
        // fieldNumber.value)
})

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

alert( fib(3) );
alert( fib(4) );
alert( fib(5) );
