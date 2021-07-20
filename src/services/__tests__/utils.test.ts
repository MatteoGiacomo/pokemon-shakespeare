import { getEncodedText } from '../utils'

describe('getEncodedText', () => {
  it('should returns an URI encoded string considering any escapes as space', () => {
    const result = getEncodedText('text with\ndifferent \fescapes')
    expect(result).toBe('text%20with%20different%20%20escapes')
  })
})
