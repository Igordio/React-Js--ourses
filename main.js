fetch('test.html')
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        var body = document.getElementById('app')

        var p = document.createElement('p')
        p.innerHTML = data
        boby.appendChild(p)


    });