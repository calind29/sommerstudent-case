import React from 'react';
import { Pokemon } from '../types';
import InfoContainer from './InfoContainer';
import Moves from './Moves'
import Backside from './cardBack.png';

import "../Card.css"

interface Props {
  pokemon?: Pokemon;
}


const Card: React.FunctionComponent<Props> = ({ pokemon }) => {
    return (
    <div className="Card">
        <div className="FlipCard">
            <div className="CardBack">
                <img className="Image" src={Backside} />
            </div>
            <div className="CardFront">
                <ul className="CardContent">
                    <li className="name"><h1>{pokemon?.name}</h1></li>
                    <li className="picture"><InfoContainer pokemon={pokemon} /></li>
                    <li className="generalInfo">NO: {pokemon?.id} HT: {pokemon?.height} WT: {pokemon?.weight}</li>
                    <li className="movesHeader"><h2>Moves:</h2></li>
                    <li className="moves"><Moves pokemon={pokemon}/></li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Card;