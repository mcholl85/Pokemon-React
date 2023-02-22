import { PAGINATION_DELTA } from '../constants'
import { getRangeOfPages } from '../utils/getRangePages'

type PaginationProps = {
  currentPage: number
  totalPage?: number
  setPage: (params: { [key: string]: string }) => void
}

function Pagination({ currentPage, totalPage = 1, setPage }: PaginationProps) {
  const range = getRangeOfPages(currentPage, totalPage, PAGINATION_DELTA)
  const handleClick = (page: number) => setPage({ page: String(page) })

  return (
    <nav aria-label='navigation' className='mb-2'>
      <ul className='pagination flex-wrap justify-content-start'>
        <li className='page-item px-1'>
          <button
            className={`page-link border-0 ${
              currentPage <= 1 ? 'disabled' : 'text-identity rounded-2 shadow-none'
            }`}
            tabIndex={-1}
            onClick={() => handleClick(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {range.map((page, index) =>
          typeof page === 'number' ? (
            <li key={index} className='page-item px-1'>
              <button
                className={`page-link text-identity border-0 rounded-2 shadow-none ${
                  page === currentPage ? 'active' : ''
                }`}
                onClick={() => handleClick(page)}
              >
                {page}
              </button>
            </li>
          ) : (
            <li key={index} className='page-item px-1'>
              <button className='page-link text-identity border-0 rounded-2 disabled shadow-none'>
                {page}
              </button>
            </li>
          ),
        )}
        <li className='page-item px-1'>
          <button
            className={`page-link border-0 ${
              currentPage >= totalPage ? 'disabled' : 'text-identity rounded-2 shadow-none'
            }`}
            onClick={() => handleClick(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}
export default Pagination
