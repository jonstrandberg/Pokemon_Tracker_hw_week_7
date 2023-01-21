import './PokemonDetail.css'


const PokemonDetail = ({pokemons, addPokemon, pokemonImage, pokemonType}) => {
    
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

    
    return (
        <>
        <div className="pokemon-detail-container">
            <ul>
            <img src={getImage()} alt={pokemons.name}/>
            <br></br>
            <h3><a href={pokemons.url}>{pokemons.name}</a></h3>
            <p>Pokemon type: {pokemonType.map((type, i) => <span key={i}>{type} </span>)}</p>
            </ul>
            <div className="flex-end">
            <button onClick={handleClick} value={pokemons}>Catch Pokemon</button>
            </div>
        </div>
        </>
    )
}

export default PokemonDetail