import React, { useEffect, useState } from 'react';
import { Pokemon } from '../types';

interface Props {
  pokemon?: Pokemon;
}

const Abilities: React.FunctionComponent<Props> = ({ pokemon }) => {
    const moveList = pokemon?.moves.map(move => move.move.name);
          
    return(
        <div>
            {
                moveList?.slice(0,2).map(m => <h3 key={m}>{m}</h3>)

            }
        </div>

    )
}
export default Abilities;