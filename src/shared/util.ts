export const formatPokemonNumber = (pokemonNumber?: number) =>
  pokemonNumber && pokemonNumber.toString().length <= 3
    ? ("000" + pokemonNumber).slice(-3)
    : pokemonNumber;