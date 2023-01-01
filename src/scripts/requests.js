async function getAllPokemons() {
    const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon`, {
        method: `GET`,
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(res => {
            render(res)
            return res
        })
    return pokemons
}

async function getPokemonByName(pokemonName) {
    try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
            method: `GET`,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                const h3 = document.querySelector("h3")
                h3.innerHTML = ""
                renderSearch(res)
                return res

            })
        return pokemon
    } catch {
        getAllPokemons()
        alert("Pokemon não existe")
    }
}
function adicionaEvento() {
    const search = document.querySelector(".search")
    const input = document.querySelector("input")
    const h3 = document.querySelector("h3")
    const ul = document.querySelector("ul")
    search.addEventListener("click", () => {
        getPokemonByName(input.value.toLocaleLowerCase())
        ul.innerHTML = ""
        h3.innerText = "Carregando..."
    })
}

getAllPokemons()
adicionaEvento()
