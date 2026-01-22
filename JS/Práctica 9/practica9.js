let ul = document.getElementById("lista");

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        json.forEach(user => {
            let li = document.createElement("li")
            li.innerHTML = user.name
            ul.appendChild(li)
        });
    })