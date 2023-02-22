type Pokemon = {
  name: string
  order: number
  imgSrc: string
}

export const filteredPokemonsBySearch = (pokemons: Pokemon[], search?: string) =>
  search
    ? [...pokemons].filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()))
    : pokemons

export const filteredPokemonsByPage = (pokemons: Pokemon[], currentPage: number, entries: number) =>
  [...pokemons].filter(
    (_pokemon, index) => index <= currentPage * entries - 1 && index >= (currentPage - 1) * entries,
  )

export const pageParamsIsValid = (page: string): boolean => {
  return !isNaN(parseInt(page)) && parseInt(page) > 0
}
