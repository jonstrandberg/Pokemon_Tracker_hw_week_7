import { useState, useEffect } from "react"
import PokemonList from "../components/PokemonList"
import PokemonDetail from "../components/PokemonDetail"
import Pokemon from "../components/Pokemon"

const PokemonContainer = () => {
    const [pokemons, setPokemons] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState(null)
    const [caughtPokemonList, setCaughtPokemonList] = useState([])
    const [pokemonImage, setPokemonImage] = useState(null)
    const [pokemonType, setPokemonType] = useState([])

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = function () {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(res => res.json())
            .then(pokemons => {
                setPokemons(pokemons.results)
            })
    }

    const onPokemonClicked = function (pokemons) {
        fetch(pokemons.url)
            .then(res => res.json())
            .then(pokemon => {
                setSelectedPokemon(pokemons)
                setPokemonImage(pokemon.sprites.front_default)
                console.log(pokemon.sprites.front_default)
                setPokemonType(pokemon.types.map(type => type.type.name))
                console.log(pokemon.types)
            })
    }

    const addPokemon = function (pokemons) {
        const copyOfCaughtPokemon = [...caughtPokemonList, pokemons]
        setCaughtPokemonList(copyOfCaughtPokemon)
    }


    return (
        <>
            <div className="Selected Pokemon">
                {selectedPokemon && <PokemonDetail addPokemon={addPokemon} pokemons={selectedPokemon} pokemonImage={pokemonImage} pokemonType={pokemonType} />}
            </div>
            <div className="caught-pokemon">
                <h2>Pokemon Caught</h2>
                <PokemonList pokemons={caughtPokemonList} onPokemonClicked={onPokemonClicked} title="caught-pokemon" />
            </div>
            <div className="found-pokemon">
                <h2>Pokemon Found</h2>
                <PokemonList pokemons={pokemons} onPokemonClicked={onPokemonClicked} />
            </div>
            <br></br>
        </>
    )
}

export default PokemonContainer