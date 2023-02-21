import { ChangeEventHandler, useState } from 'react'
import { DEFAULT_PAGE } from '../constants'

type SearchProps = {
  search: string
  setSearch: (params: { [key: string]: string }) => void
}

function Search({ search, setSearch }: SearchProps) {
  const [inputValue, setInputValue] = useState(search)
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value
    setInputValue(value)
    setSearch({ search: value, page: String(DEFAULT_PAGE) })
  }

  return (
    <div className='input-group rounded-5 overflow-hidden w-50'>
      <span className='input-group-text border-0 bg-white' id='basic-addon1'>
        <svg
          width='16'
          height='15'
          viewBox='0 0 36 37'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M32.7 35.85L20.65 23.8C19.65 24.6667 18.4833 25.3417 17.15 25.825C15.8167 26.3083 14.4 26.55 12.9 26.55C9.3 26.55 6.25 25.3 3.75 22.8C1.25 20.3 0 17.2833 0 13.75C0 10.2167 1.25 7.2 3.75 4.7C6.25 2.2 9.28333 0.95 12.85 0.95C16.3833 0.95 19.3917 2.2 21.875 4.7C24.3583 7.2 25.6 10.2167 25.6 13.75C25.6 15.1833 25.3667 16.5667 24.9 17.9C24.4333 19.2333 23.7333 20.4833 22.8 21.65L34.95 33.7C35.25 33.9667 35.4 34.3083 35.4 34.725C35.4 35.1417 35.2333 35.5167 34.9 35.85C34.6 36.15 34.2333 36.3 33.8 36.3C33.3667 36.3 33 36.15 32.7 35.85ZM12.85 23.55C15.55 23.55 17.85 22.5917 19.75 20.675C21.65 18.7583 22.6 16.45 22.6 13.75C22.6 11.05 21.65 8.74167 19.75 6.825C17.85 4.90833 15.55 3.95 12.85 3.95C10.1167 3.95 7.79167 4.90833 5.875 6.825C3.95833 8.74167 3 11.05 3 13.75C3 16.45 3.95833 18.7583 5.875 20.675C7.79167 22.5917 10.1167 23.55 12.85 23.55Z'
            fill='#DC0A2D'
          />
        </svg>
      </span>
      <input
        type='text'
        className='form-control border-0 shadow-none'
        placeholder='Search'
        aria-label='Search'
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  )
}
export default Search
