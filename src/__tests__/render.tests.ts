import { getAppDom } from '../../jest.utils'

test('title is present in page', () => {
  const APP_DOM = getAppDom()
  const title = APP_DOM.querySelector('h1')
  expect(title).not.toBeNull()
})
