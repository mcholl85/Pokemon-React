import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PokemonCard from '../../components/PokemonCard'

describe('PokemonCard', () => {
  test('Matches DOM snapshots', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <PokemonCard order={2} name={'test'} imgSrc={''} />
      </MemoryRouter>,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test.each`
    order | name
    ${1}  | ${'test1'}
    ${2}  | ${'test2'}
    ${3}  | ${'test3'}
  `('Should render the pokemon order: $order & name: $name values', ({ order, name }) => {
    render(
      <MemoryRouter>
        <PokemonCard order={order} name={name} imgSrc={''} />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: name })).toHaveTextContent(name)
    expect(screen.getByRole('banner')).toHaveTextContent(`#${order}`)
  })
})
