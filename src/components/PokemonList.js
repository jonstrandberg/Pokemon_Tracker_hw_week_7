import Pokemon from "./Pokemon"
import './PokemonList.css'

const PokemonList = ({pokemons, onPokemonClicked, PokemonImage, pokemonType, pokemonAbilities}) => {

    const listOfPokemon = pokemons.map((pokemons) => {
        return <Pokemon key={pokemons.name} 
                        pokemons={pokemons}    
                        name={pokemons.name} 
                        url={pokemons.url} 
                        onPokemonClicked={onPokemonClicked} 
                        pokemonImage={PokemonImage} 
                        pokemonType={pokemonType} 
                        pokemonAbilities={pokemonAbilities}/>
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