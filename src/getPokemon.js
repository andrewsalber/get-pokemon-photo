// async function getPokemon() {
//     const result = await fetch('https://pokeapi.co/api/v2/pokemon/35/')
//     .then(response => response.json())
//     .then(data => data.sprites.front_default)
//     .then(data => return data);
//     //.then(data => console.log(data));
//     //return result;
//     //return result;
// }

// function fetchPokemon() {
//     fetch('https://pokeapi.co/api/v2/pokemon/35/')
//     .then(response => response.json())
//     .then(data => data.sprites.front_default)
// }
  
async function getPokemon() {
    await fetch('https://pokeapi.co/api/v2/pokemon/35/')
    .then(response => response.json())
    //.then(data => console.log(data));
    //.then(data => data.sprites.front_default)
    //console.log(result);
    //return result
    // expected output: "resolved"
}

export default getPokemon;