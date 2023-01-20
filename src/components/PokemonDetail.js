const PokemonDetail = ({pokemons, addPokemon}) => {
    
    const handleClick = () => {
        const caughtPokemon = pokemons
        console.log(caughtPokemon)
        addPokemon(caughtPokemon)
    }

    
    return (
        <>
        <div className="beer-detail">
            <ul>
            <li>
            <p>Pokemon</p>
            <a href={pokemons.url}>{pokemons.name}</a>
            </li>
            </ul>
            <button onClick={handleClick} value={pokemons}>Pokemon Caught</button>
        </div>
        </>
    )
}

export default PokemonDetail