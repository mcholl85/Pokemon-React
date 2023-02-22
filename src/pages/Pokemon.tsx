import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import NotFound from '../components/NotFound'
import PokemonImg from '../components/PokemonImg'
import { STAT_INDICES } from '../constants'
import { getPokemon } from '../services/api/pokemon'

function Pokemon() {
  const { name } = useParams() as Record<'name', string>
  const {
    data: pokemon,
    isLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ['pokemon', name],
    queryFn: async () => getPokemon(name),
  })

  if (isLoading) return <Loading />
  if (isError) return <NotFound />

  return (
    <div className='container-fluid p-0 vh-100 d-flex flex-column'>
      {isSuccess && (
        <div className={`p-3 flex-fill overflow-y-auto bg-${pokemon.theme}`}>
          <div className='col-lg-8 mx-auto'>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                <Link to='/' className='btn'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M14.35 30.95L0.45 17.05C0.283333 16.8833 0.166667 16.7167 0.1 16.55C0.0333337 16.3833 0 16.2 0 16C0 15.8 0.0333337 15.6167 0.1 15.45C0.166667 15.2833 0.283333 15.1167 0.45 14.95L14.4 1C14.6667 0.733333 15 0.6 15.4 0.6C15.8 0.6 16.15 0.75 16.45 1.05C16.75 1.35 16.9 1.7 16.9 2.1C16.9 2.5 16.75 2.85 16.45 3.15L5.1 14.5H29.9C30.3333 14.5 30.6917 14.6417 30.975 14.925C31.2583 15.2083 31.4 15.5667 31.4 16C31.4 16.4333 31.2583 16.7917 30.975 17.075C30.6917 17.3583 30.3333 17.5 29.9 17.5H5.1L16.5 28.9C16.7667 29.1667 16.9 29.5 16.9 29.9C16.9 30.3 16.75 30.65 16.45 30.95C16.15 31.25 15.8 31.4 15.4 31.4C15 31.4 14.65 31.25 14.35 30.95Z'
                      fill='white'
                    />
                  </svg>
                </Link>
                <h1 className='fw-bold text-white text-capitalize m-0'>{name}</h1>
              </div>
              <h4 className='fw-bold text-white'># {pokemon.id}</h4>
            </div>
            <div className='pokemon-stats rounded-4 bg-white position-relative'>
              <div className='pokemon-img d-flex align-items-center justify-content-center position-absolute'>
                {pokemon.imgSrc && (
                  <PokemonImg
                    imgSrc={pokemon.imgSrc}
                    alt='Pokemon image'
                    height='200'
                    width='200'
                  />
                )}
                <svg
                  width='206'
                  height='208'
                  viewBox='0 0 206 208'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='position-absolute pokeball-img'
                >
                  <path
                    d='M127.762 104C127.762 117.676 116.676 128.762 103 128.762C89.3244 128.762 78.2381 117.676 78.2381 104C78.2381 90.3244 89.3244 79.2381 103 79.2381C116.676 79.2381 127.762 90.3244 127.762 104Z'
                    fill='white'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M103 208C155.393 208 198.738 169.257 205.947 118.857H145.035C138.917 136.169 122.407 148.571 103 148.571C83.5933 148.571 67.0835 136.169 60.9648 118.857H0.0532227C7.26235 169.257 50.6067 208 103 208ZM60.9648 89.1429H0.0532227C7.26235 38.7431 50.6067 0 103 0C155.393 0 198.738 38.7431 205.947 89.1429H145.035C138.917 71.8314 122.407 59.4286 103 59.4286C83.5933 59.4286 67.0835 71.8314 60.9648 89.1429ZM127.762 104C127.762 117.676 116.676 128.762 103 128.762C89.3244 128.762 78.2381 117.676 78.2381 104C78.2381 90.3244 89.3244 79.2381 103 79.2381C116.676 79.2381 127.762 90.3244 127.762 104Z'
                    fill='white'
                  />
                </svg>
              </div>
              <div>
                <div className='d-flex align-items-center justify-content-center px-4'>
                  {pokemon.types.map((type) => (
                    <span
                      key={type}
                      className={`form-text text-white fw-bold px-4 py-2 rounded-pill m-2 bg-${type}`}
                    >
                      {type}
                    </span>
                  ))}
                </div>
                <div className='py-3'>
                  <h4 className={`text-${pokemon.theme} fw-bold text-center`}>About</h4>
                </div>
                <div className='py-3'>
                  <div className='row'>
                    <div className='col-4 text-center d-flex align-items-center justify-content-center border-end flex-column border-3'>
                      <div className='d-flex align-items-center'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 48 48'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='me-2'
                        >
                          <path
                            d='M10.85 39H37.15L34 17H14L10.85 39ZM24 14C24.8667 14 25.5833 13.7083 26.15 13.125C26.7167 12.5417 27 11.8333 27 11C27 10.1333 26.7167 9.41667 26.15 8.85C25.5833 8.28333 24.8667 8 24 8C23.1667 8 22.4583 8.28333 21.875 8.85C21.2917 9.41667 21 10.1333 21 11C21 11.8333 21.2917 12.5417 21.875 13.125C22.4583 13.7083 23.1667 14 24 14ZM29.2 14H34C34.7667 14 35.4333 14.2417 36 14.725C36.5667 15.2083 36.9 15.8333 37 16.6L40.1 38.6C40.2333 39.5 40.0083 40.2917 39.425 40.975C38.8417 41.6583 38.0833 42 37.15 42H10.85C9.91667 42 9.15834 41.6583 8.575 40.975C7.99167 40.2917 7.76667 39.5 7.9 38.6L11 16.6C11.1 15.8333 11.4333 15.2083 12 14.725C12.5667 14.2417 13.2333 14 14 14H18.8C18.5333 13.5333 18.3333 13.0583 18.2 12.575C18.0667 12.0917 18 11.5667 18 11C18 9.33333 18.5833 7.91667 19.75 6.75C20.9167 5.58333 22.3333 5 24 5C25.6667 5 27.0833 5.58333 28.25 6.75C29.4167 7.91667 30 9.33333 30 11C30 11.5667 29.9333 12.0917 29.8 12.575C29.6667 13.0583 29.4667 13.5333 29.2 14ZM10.85 39H37.15H10.85Z'
                            fill='#1D1D1D'
                          />
                        </svg>

                        <h6 className='mb-0 text-black'>{pokemon.weight} kg</h6>
                      </div>
                      <div>
                        <h6 className='mb-0 text-secondary mt-3'>Weight</h6>
                      </div>
                    </div>
                    <div className='col-4 text-center d-flex align-items-center justify-content-center border-end flex-column border-3'>
                      <div className='d-flex align-items-center'>
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 48 48'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='me-2'
                        >
                          <path
                            d='M7 36C6.2 36 5.5 35.7 4.9 35.1C4.3 34.5 4 33.8 4 33V15C4 14.2333 4.3 13.5417 4.9 12.925C5.5 12.3083 6.2 12 7 12H41C41.8 12 42.5 12.3083 43.1 12.925C43.7 13.5417 44 14.2333 44 15V33C44 33.8 43.7 34.5 43.1 35.1C42.5 35.7 41.8 36 41 36H7ZM7 33H41V15H34.5V24H31.5V15H25.5V24H22.5V15H16.5V24H13.5V15H7V33ZM13.5 24H16.5H13.5ZM22.5 24H25.5H22.5ZM31.5 24H34.5H31.5Z'
                            fill='#1D1D1D'
                          />
                        </svg>

                        <h6 className='mb-0 text-black'>{pokemon.height} m</h6>
                      </div>
                      <div>
                        <h6 className='mb-0 text-secondary mt-3'>Height</h6>
                      </div>
                    </div>
                    <div className='col-4 text-center d-flex align-items-center justify-content-center flex-column'>
                      {pokemon.moves.map((move) => (
                        <div key={move} className='d-flex align-items-center'>
                          <h6 className='mb-0 text-black text-capitalize'>{move}</h6>
                        </div>
                      ))}
                      <div>
                        <h6 className='mb-0 text-secondary mt-3'>Moves</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='py-3'>
                  <h4 className={`text-${pokemon.theme} fw-bold text-center`}>Base Stats</h4>
                  <div className='mt-4'>
                    {pokemon.stats.map((stat) => (
                      <div
                        key={stat.name}
                        className='d-flex align-items-center justify-content-center border-bottom border-2 p-md-3 p-2'
                      >
                        <div className='flex-fill'>
                          <h6 className={`fw-bold text-${pokemon.theme} text-uppercase`}>
                            {stat.name}
                          </h6>
                          <div className='d-flex align-items-center'>
                            <h6 className='mb-0'>{stat.base}</h6>
                            <div className='progress w-100 ms-3 rounded-pill'>
                              <div
                                className={`progress-bar bg-${pokemon.theme}`}
                                role='progressbar'
                                style={{ width: stat.base / STAT_INDICES + '%' }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Pokemon
