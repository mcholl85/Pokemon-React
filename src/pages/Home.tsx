import { Link, useSearchParams } from 'react-router-dom'
import NotFound from '../components/Error'
import Loading from '../components/Loading'
import Pagination from '../components/Pagination'
import PokemonCard from '../components/PokemonCard'
import Search from '../components/Search'
import usePokemons from '../services/hooks/use-pokemons'

function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const setParams = (param: { [key: string]: string }) => {
    const copyParams = [...searchParams.entries()].reduce(
      (obj, [key, value]) => ({ ...obj, [key]: value }),
      {},
    )
    setSearchParams({ ...copyParams, ...param })
  }
  const search = searchParams.get('search') || ''
  const page = searchParams.get('page') || ''
  const { pokemons, currentPage, totalPage, isLoading } = usePokemons({ search, page })

  return (
    <div className='container-fluid p-0 pt-3 d-flex flex-column bg-identity'>
      <nav className='navbar navbar-light mx-3 mx-sm-5 gap-2'>
        <Link className='navbar-brand fw-bold d-flex align-items-center text-white div' to='/'>
          <svg
            className='me-2'
            width='40'
            height='40'
            viewBox='0 0 48 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M29.7144 24C29.7144 27.1559 27.156 29.7143 24.0001 29.7143C20.8442 29.7143 18.2858 27.1559 18.2858 24C18.2858 20.8441 20.8442 18.2857 24.0001 18.2857C27.156 18.2857 29.7144 20.8441 29.7144 24Z'
              fill='white'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M24.0001 48C36.0909 48 46.0934 39.0593 47.7571 27.4286H33.7006C32.2885 31.4235 28.4786 34.2857 24.0001 34.2857C19.5217 34.2857 15.7117 31.4235 14.2997 27.4286H0.243164C1.90681 39.0593 11.9094 48 24.0001 48ZM14.2997 20.5714H0.243164C1.90681 8.94071 11.9094 0 24.0001 0C36.0909 0 46.0934 8.94071 47.7571 20.5714H33.7006C32.2885 16.5765 28.4786 13.7143 24.0001 13.7143C19.5217 13.7143 15.7117 16.5765 14.2997 20.5714ZM29.7144 24C29.7144 27.1559 27.156 29.7143 24.0001 29.7143C20.8442 29.7143 18.2858 27.1559 18.2858 24C18.2858 20.8441 20.8442 18.2857 24.0001 18.2857C27.156 18.2857 29.7144 20.8441 29.7144 24Z'
              fill='white'
            />
          </svg>
          Pokédex
        </Link>
        <Search search={search} setSearch={setParams} />
      </nav>
      <div className='bg-white m-2 m-sm-4 p-2 p-sm-4 rounded-3 min-vh-100'>
        {pokemons && (
          <div className='row p-1'>
            <Pagination currentPage={currentPage} totalPage={totalPage} setPage={setParams} />
            {pokemons.length > 0 ? (
              pokemons.map(({ name, order }) => (
                <PokemonCard key={name} order={order} name={name} />
              ))
            ) : (
              <NotFound />
            )}
          </div>
        )}
        {isLoading && <Loading />}
      </div>
    </div>
  )
}

export default Home
