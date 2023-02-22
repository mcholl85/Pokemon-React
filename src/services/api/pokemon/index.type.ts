export type PokemonsList = {
  count: number
  pokemons: {
    name: string
    order: number
    imgSrc: string
  }[]
}

export type PokemonInfos = {
  theme: string
  id: number
  imgSrc: string
  types: string[]
  stats: { name: string; base: number }[]
  moves: string[]
  order: number
  height: number
  weight: number
}
