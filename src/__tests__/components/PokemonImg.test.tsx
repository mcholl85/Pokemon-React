import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import PokemonImg from '../../components/PokemonImg'

describe('PokemonImg', () => {
  test('Should remove imgSrc onError', async () => {
    render(<PokemonImg imgSrc='esfeqfesfez.png' />)

    const img = screen.getByRole('img')

    fireEvent.error(img)

    await waitFor(() => expect(img).not.toHaveAttribute('src'))
  })
})
