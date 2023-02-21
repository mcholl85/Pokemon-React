import axios from 'axios'
import { Pokemon } from '../../../types/pokemon'
import { API_URL } from '../../../constants'

export const getPokemon = async (name: string): Promise<Pokemon> => {
  const response = await axios.get(`${API_URL}pokemon/${name}`)
  return await response.data
}
