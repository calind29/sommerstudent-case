import React, { useEffect, useState } from 'react';
import { fetchPokemon } from './utils';
import { Pokemon } from './types';
import axios from 'axios';

import './app.css';
import Card from './components/Card';

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const [pokemonName, setPokemonName] = useState("bulbasaur");

  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`).then( res => {
      setPokemonList(res.data.results.map((p: any) => p.name))
    })
  }, [])

  const randomPokemon = () => {
    const ran = Math.floor((Math.random()*pokemonList.length))
    setPokemonName(pokemonList[ran]);

    console.log(ran)
    console.log(pokemonList[ran])
  }
  
  useEffect(() => {
    fetchPokemon(pokemonName).then((res) => setPokemon(res));
  });

  return (
    <div className='appRoot'>
      <Card  pokemon={pokemon} />
      <button className="changeButton" onClick={randomPokemon}>Change pokemon</button>
    </div>
  );
};

export default App;
