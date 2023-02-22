import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Pagination from '../../components/Pagination'

describe('Pagination', () => {
  test('Matches DOM snapshot', () => {
    const { asFragment } = render(<Pagination currentPage={2} totalPage={2} setPage={() => ({})} />)

    expect(asFragment()).toMatchSnapshot()
  })
  test.each`
    currentPage
    ${1}
    ${2}
    ${3}
  `('Should have the button $currentPage  active', ({ currentPage }) => {
    render(<Pagination currentPage={currentPage} totalPage={currentPage} setPage={() => ({})} />)
    const button = screen.getByRole('button', { name: currentPage })

    expect(button).toHaveClass('active')
  })
  test('Should have the previous button disabled given a totalPage of 3 when the currentPage is 1', () => {
    render(<Pagination currentPage={1} totalPage={3} setPage={() => ({})} />)
    const previousButton = screen.getByRole('button', { name: 'Previous' })
    const nextButton = screen.getByRole('button', { name: 'Next' })
    expect

    expect(previousButton).toHaveClass('disabled')
    expect(nextButton).not.toHaveClass('disabled')
  })
  test('Should have the next button disabled given a totalPage of 3 when the currentPage is 3', () => {
    render(<Pagination currentPage={3} totalPage={3} setPage={() => ({})} />)
    const previousButton = screen.getByRole('button', { name: 'Previous' })
    const nextButton = screen.getByRole('button', { name: 'Next' })
    expect

    expect(previousButton).not.toHaveClass('disabled')
    expect(nextButton).toHaveClass('disabled')
  })
  test('Should set a new page given a click on active button', async () => {
    const setPageMock = jest.fn()
    render(<Pagination currentPage={3} totalPage={3} setPage={setPageMock} />)
    const button = screen.getByRole('button', { name: '2' })

    await userEvent.click(button)

    expect(setPageMock).toBeCalledTimes(1)
    expect(setPageMock).toBeCalledWith({ page: '2' })
  })
})
