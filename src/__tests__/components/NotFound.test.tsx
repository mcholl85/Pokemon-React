import { render } from '@testing-library/react'
import NotFound from '../../components/NotFound'

describe('NotFound', () => {
  test('Matches DOM snapshot', () => {
    const { asFragment } = render(<NotFound />)

    expect(asFragment()).toMatchSnapshot()
  })
})
