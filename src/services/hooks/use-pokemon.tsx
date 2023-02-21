import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import {
  CONVERT_HEIGHT_INDICES,
  CONVERT_WEIGHT_INDICES,
  SPRITE_EXTENSION,
  SPRITE_URL,
} from '../../constants'
import { getPokemon } from '../api/pokemon'

type usePokemonProps = {
  name: string
}

function usePokemon({ name }: usePokemonProps) {
  const [types, setTypes] = useState<string[]>([''])
  const [stats, setStats] = useState<{ name: string; base: number }[]>([])
  const [moves, setMoves] = useState<string[]>([])
  const [height, setHeight] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)
  const [imgSrc, setImgSrc] = useState<string>()
  const [id, setId] = useState<number>()

  const { isSuccess, isLoading } = useQuery({
    queryKey: ['pokemon', name],
    queryFn: async () => await getPokemon(name),
    onSuccess: (data) => {
      setTypes(data.types.map(({ type }) => type.name))
      setMoves(data.moves.map(({ move }) => move.name))
      setStats(data.stats.map((stat) => ({ name: stat.stat.name, base: stat.base_stat })))
      setHeight(data.height / CONVERT_HEIGHT_INDICES)
      setWeight(data.weight / CONVERT_WEIGHT_INDICES)
      setId(data.id)
      setImgSrc(`${SPRITE_URL}${data.id}${SPRITE_EXTENSION}`)
    },
  })

  return {
    isLoading,
    isSuccess,
    pokemon: {
      imgSrc,
      types,
      moves,
      stats,
      height,
      weight,
      id,
    },
  }
}

export default usePokemon
