import { Link } from 'react-router-dom'
import { SPRITE_EXTENSION, SPRITE_URL } from '../constants'
import PokemonImg from './PokemonImg'

type PokemonCardProps = {
  order: number
  name: string
}

function PokemonCard({ order, name }: PokemonCardProps) {
  const imgSrc = `${SPRITE_URL}${order}${SPRITE_EXTENSION}`

  return (
    <div key={order} className='col-xl-3 col-lg-4 col-sm-6 pb-md-5 pb-3'>
      <Link to={`/${name}`} className='text-decoration-none'>
        <div className='card pokeball-card rounded-3 border-0 overflow-hidden shadow grayscale-background'>
          <header className='d-flex align-items-center justify-content-end pt-2 px-3 grayscale-medium'>
            #{order}
          </header>
          <div className='p-1 p-sm-3 rounded-3 d-flex align-items-center justify-content-center'>
            <PokemonImg imgSrc={imgSrc} height='150' width='150' alt='pokemon image' />
          </div>
          <h4 className='pt-1 pt-sm-3 mb-4 text-center grayscale-dark'>{name}</h4>
        </div>
      </Link>
    </div>
  )
}
export default PokemonCard
