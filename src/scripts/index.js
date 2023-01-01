
function render(array) {
    const ul = document.querySelector("ul")
    const h3 = document.querySelector("h3")

    ul.innerHTML = ""
    h3.innerHTML = ""

    array.results.forEach(element => {
        const li = document.createElement("li")
        const img = document.createElement("img")
        const p = document.createElement("p")
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${element.url.slice(34, -1)}.png`

        p.innerText = element.name[0].toUpperCase() + element.name.slice(1)

        li.appendChild(img)
        li.appendChild(p)
        ul.appendChild(li)
    });
}

function renderSearch(name) {
    const ul = document.querySelector("ul")
    ul.innerHTML = ""
    const li = document.createElement("li")
    const img = document.createElement("img")
    const p = document.createElement("p")
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${name.id}.png`

    p.innerText = name.name[0].toUpperCase() + name.name.slice(1)

    li.appendChild(img)
    li.appendChild(p)
    ul.appendChild(li)
}


