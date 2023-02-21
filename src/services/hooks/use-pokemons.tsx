import { useQuery } from '@tanstack/react-query'
import { DEFAULT_ENTRIES, DEFAULT_PAGE } from '../../constants'
import { calcTotalPages } from '../../utils/calcTotalPages'
import {
  filteredPokemonsByPage,
  filteredPokemonsBySearch,
  pageParamsIsValid,
} from '../../utils/filtereredPokemons'
import { getPokemons } from '../api/pokemons'

type usePokemonsProps = {
  search?: string
  page?: string
}

function usePokemons({ search, page }: usePokemonsProps) {
  const currentPage = page && pageParamsIsValid(page) ? parseInt(page, 10) : DEFAULT_PAGE

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['pokemons'],
    queryFn: async () => getPokemons(10000, 0),
    select: (data) => ({
      pokemons: data.results.map((pokemon: { name: string }, index: number) => ({
        order: index + 1,
        name: pokemon.name,
      })),
      count: data.count,
    }),
  })

  const pokemonsBySearch = data?.pokemons && filteredPokemonsBySearch(data?.pokemons, search)

  const pokemons =
    data?.pokemons &&
    filteredPokemonsByPage(
      filteredPokemonsBySearch(data?.pokemons, search),
      currentPage,
      DEFAULT_ENTRIES,
    )

  const totalPage =
    (pokemonsBySearch && calcTotalPages(pokemonsBySearch.length, DEFAULT_ENTRIES)) ||
    (data && calcTotalPages(data.count, DEFAULT_ENTRIES))

  return { totalPage, pokemons, isSuccess, isLoading, currentPage }
}
export default usePokemons
