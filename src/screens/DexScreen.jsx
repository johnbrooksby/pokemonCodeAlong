import React, { useEffect, useState } from "react";
import axios from "axios";

const DexScreen = () => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`).then(res => {
            setPokemon(res.data.results)
        })
    }, [])

    const pokemonDisplay = pokemon.map((poke, index) => {
        return <h4>{poke.name}</h4>
    })

    return (
        <div>
            <h1>Pokedex</h1>
            {pokemonDisplay}
        </div>
    )
}

export default DexScreen;