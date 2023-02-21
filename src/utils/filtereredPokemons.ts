import { Pokemons } from '../types/pokemons'

export const filteredPokemonsBySearch = (pokemons: Pokemons[], search?: string) =>
  search
    ? [...pokemons].filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase()))
    : pokemons

export const filteredPokemonsByPage = (
  pokemons: Pokemons[],
  currentPage: number,
  entries: number,
) =>
  [...pokemons].filter(
    (_pokemon, index) => index <= currentPage * entries - 1 && index >= (currentPage - 1) * entries,
  )

export const pageParamsIsValid = (page: string): boolean => {
  return !isNaN(parseInt(page)) && parseInt(page) > 0
}
