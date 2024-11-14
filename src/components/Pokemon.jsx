import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import notFound from "../assets/notFound.jpg";

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

    const fetchPokemon = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            // console.log(data);

            const detailedPokemonData = data.results.map(async (curPokemon) => {
                const res = await fetch(curPokemon.url);
                const data = await res.json();
                return data;
            });
            // console.log(detailedPokemonData);

            const detailedResponses = await Promise.all(detailedPokemonData);
            // console.log(detailedResponses);

            setPokemon(detailedResponses);
            setLoading(false);
        } catch (error) {
            // console.log(error);
        }
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    const filteredPokemon = pokemon.filter((pokemonItem) => {
        return pokemonItem.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <section className="text-center my-3">
            <h1 className="text-center text-green-400 text-5xl font-bold underline decoration-orange-300">
                Pokémon
            </h1>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search here"
                className="input input-bordered w-full max-w-xs mt-8 text-white"
            />

            {loading ? (
                <div className="flex flex-col items-center justify-center mt-14">
                <span className="loading loading-spinner text-success w-14 h-14"></span> 
                </div>
            ) : filteredPokemon.length > 0 ? (
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-6 justify-center items-center place-items-center">
                    {filteredPokemon.map((currdata) => (
                        <Card key={currdata.id} pokemon={currdata} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center mt-14">
                    <img
                        src={notFound}
                        alt="No Pokémon found"
                        className="rounded-md"
                        width={300}
                    />
                    <p className="text-lg mt-4 text-red-500">No Pokémon found</p>
                </div>
            )}
        </section>
    );
};

export default Pokemon;
