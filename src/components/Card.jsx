import React from "react";
import Pokemon from './Pokemon';

const Card = (props) => {
  // console.log(props.pokemon)
    return (
        <div className="card bg-base-100 w-64  shadow-xl">
            <figure>
                <img
                  className="border-b-2"
                    src={props.pokemon.sprites.other.dream_world.front_default}
                    alt={props.pokemon.name.toUpperCase()}
                    width={150}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {props.pokemon.name.toUpperCase()}
                </h2>

                <div className="card-actions justify-center">
                    <div className="badge badge-outline">Height: {props.pokemon.height}</div>
                    <div className="badge badge-outline">Weight: {props.pokemon.weight}</div>
                    <div className="badge badge-outline">Speed: {props.pokemon.stats[5].base_stat}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
