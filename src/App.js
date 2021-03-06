import './App.css';
import React, { useState, useEffect } from 'react';
import AllPokemon from './AllPokemon.js'
import Header from './Header.js'

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [currPoke, setPoke] = useState(1);
  const [currPokePhoto, setPokePhoto] = useState();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/'.concat(currPoke))
      .then(response => response.json())
      .then(data => data.sprites.front_default)
      .then(data => setPokePhoto(data));
  });

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
      .then(response => response.json())
      .then(data => data.results)
      .then(data => data.map((ea) => ea.name))
      .then(data => setAllPokemon(data))
  }, [])

  function handleChange(event) {
    setPoke(event.target.value)
  }

  return (
    <div className="App">
      <Header />
      <header>
        <AllPokemon list = {allPokemon} currPoke = {currPoke} onChange={handleChange}/>
        <div>
          <img className="Photo" src={currPokePhoto} alt={currPoke} />
        </div>
      </header>
    </div>
  );
}

export default App;
