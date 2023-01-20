const Pokemon = ({pokemons, onPokemonClicked}) => {

    const handleClick = function () {
        onPokemonClicked(pokemons)
    }


    return (
        <div>
            <li onClick={handleClick}>
                {pokemons.name}
            </li>
        </div>
    )
}

export default Pokemon