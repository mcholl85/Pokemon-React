import axios from 'axios'
import { API_URL } from '../../../constants'
import { PokemonsList, PokemonInfos } from './index.type'

export const getPokemon = async (name: string): Promise<PokemonInfos> => {
  const response = await axios.get(`${API_URL}pokemon/${name}`)
  return await response.data
}

export const getPokemons = async (): Promise<PokemonsList> => {
  const response = await axios.get(`${API_URL}pokemon`)
  return await response.data
}
