const fetchPokemonData = async () => {
    const pokemonDetails = await fetch(`https://pokeapi.co/api/v2/pokemon?`);
    const data = await pokemonDetails.json()
    let pokemonData = data.results;
    if (pokemonData) {
        for (let i = 0; i < pokemonData.length; i++)
            document.write("<li><b>Name: </b>" + pokemonData[i].name + ` <a href=${pokemonData[i].url}>` + "link" + "</a></li>")
    }
    console.log(data.results);
};

fetchPokemonData()