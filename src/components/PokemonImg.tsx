import { HTMLProps, useState } from 'react'
import defaultImg from '../assets/img/image.png'

type PokemonImg = {
  imgSrc: string
} & HTMLProps<HTMLImageElement>

function PokemonImg({ imgSrc, ...props }: PokemonImg) {
  const [src, setSrc] = useState(imgSrc)
  const handleError = () => setSrc(defaultImg)

  return <img {...props} onError={handleError} src={src} />
}
export default PokemonImg
