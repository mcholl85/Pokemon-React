import axios from 'axios'
import { API_URL } from '../../../constants'
import { PokemonsResult } from '../../../types/pokemons'

export const getPokemons = async (limit = 20, offset = 0): Promise<PokemonsResult> => {
  const response = await axios.get(`${API_URL}pokemon?limit=${limit}&offset=${offset}`)
  return await response.data
}
