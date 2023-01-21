import './PokemonDetail.css'


const PokemonDetail = ({pokemons, addPokemon, pokemonImage, pokemonType, pokemonAbilities}) => {
    
    const handleClick = () => {
        const caughtPokemon = pokemons
        console.log(caughtPokemon)
        addPokemon(caughtPokemon)
    }
    const getImage = () => {
        if (!pokemonImage) {
            return 'default-image.jpg';
        }
        return pokemonImage;
    }

    const getType = () => {
        const type = pokemonType.join(", ")
        return type 
    }

    const getAbilities = () => {
        const abilities = pokemonAbilities.map((ability, i) => <span key={i}>{ability} </span>)
        return abilities
    }

    
    return (
        <>
        <div className="pokemon-detail-container">
            <ul>
            <img src={getImage()} alt={pokemons.name}/>
            <br></br>
            <h3><a href={pokemons.url}>{pokemons.name}</a></h3>
            <p>Pokemon type: {getType()}</p>
            <p>Abilities: {getAbilities()}</p>
            </ul>
            <div className="flex-end">
            <button onClick={handleClick} value={pokemons}>Catch Pokemon</button>
            </div>
        </div>
        </>
    )
}

export default PokemonDetail