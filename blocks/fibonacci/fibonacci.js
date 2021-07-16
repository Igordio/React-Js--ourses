    function phib(n) {
        var phi = (1 + Math.sqrt(5))/2
        return (phi**n-(-phi)**-n)/(2*phi-1)

    
    }

    function recalc (id){
        result.innerText = phib(inpt.value)
    }

    var go = document.getElementById('go')
    var inpt = document.getElementById('inpt')
    var result = document.getElementById('result')

    go.addEventListener("click", recalc)
    inpt.addEventListener("change", recalc)

