import React, { useEffect, useState } from 'react';
import { fetchPokemon } from './utils';
import { Pokemon } from './types';

import './app.css';
import Card from './components/Card';

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const [pokemonName, setPokemonName] = useState("bulbasaur");

  useEffect(() => {
    fetchPokemon(pokemonName).then((res) => setPokemon(res));
  }, []);

  const changePokemon = (e:any) => {
    setPokemonName(e.target.value);
    console.log(pokemonName);
  }

  return (
    <div className='appRoot'>
      <Card pokemon={pokemon}/>
    </div>
  );
};

export default App;
