import { render } from '@testing-library/react'
import Loading from '../../components/Loading'

describe('Loading', () => {
  test('Matches DOM snapshot', () => {
    const { asFragment } = render(<Loading />)

    expect(asFragment()).toMatchSnapshot()
  })
})
