function fib() {
    let loop = [1, 1];
    let btn = document.getElementById('btn');
    let number=document.getElementById('txtloop').value;
    
    for (let i = 3; i < number; i++)
        loop[i] = loop[i-1]+ loop[i-2];

        btn.onclick=(function() {
            document.getElementById('output').innerHTML=loop[number-1]; 
        })
    }
   
   

// function fib(num) {
//     if (num < 2){
//         return num;
   
//     }
//     return fib(num - 1) + fib(num - 2);
    
//     console.log(fib(4));
// }