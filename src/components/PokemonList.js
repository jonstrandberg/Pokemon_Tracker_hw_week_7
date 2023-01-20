import Pokemon from "./Pokemon"
import './PokemonList.css'

const PokemonList = ({pokemons, onPokemonClicked}) => {

    const listOfPokemon = pokemons.map((pokemons) => {
        return <Pokemon key={pokemons.name} pokemons={pokemons} name={pokemons.name} url={pokemons.url} onPokemonClicked={onPokemonClicked}/>
})

    return (
        <div>
            <ol className="ordered-list">
              {listOfPokemon}
            </ol>
        </div>
    )


}

export default PokemonList