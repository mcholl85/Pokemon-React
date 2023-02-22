import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Search from '../../components/Search'
import { DEFAULT_PAGE } from '../../constants'

describe('Search', () => {
  test('Matches DOM snapshot', () => {
    const { asFragment } = render(<Search search='' setSearch={() => ({})} />)

    expect(asFragment()).toMatchSnapshot()
  })
  test.each`
    value
    ${''}
    ${'bulbi'}
    ${'pikachu'}
  `('should render a $value on input', ({ value }) => {
    render(<Search search={value} setSearch={() => ({})} />)
    const input = screen.getByPlaceholderText('Search')

    expect(input).toHaveDisplayValue(value)
  })
  test.each`
    value
    ${'bulbi'}
    ${'pikachu'}
  `('should render $value given the input value', async ({ value }) => {
    render(<Search search='' setSearch={() => ({})} />)
    const input = screen.getByPlaceholderText('Search')

    await userEvent.type(input, value)
    expect(input).toHaveDisplayValue(value)
  })
  test.each`
    value
    ${'b'}
  `('should setSearch after typing value on input', async ({ value }) => {
    const setSearchMock = jest.fn()
    render(<Search search='' setSearch={setSearchMock} />)
    const input = screen.getByPlaceholderText('Search')

    await userEvent.type(input, value)
    expect(setSearchMock).toBeCalledTimes(value.length)
    expect(setSearchMock).toBeCalledWith({ search: value, page: String(DEFAULT_PAGE) })
  })
})
