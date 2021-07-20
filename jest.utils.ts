import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const htmlFile = fs.readFileSync(path.resolve(__dirname, './index.html'))

export const getAppDom = (): Document => {
  const { window } = new JSDOM(htmlFile, { resources: 'usable', runScripts: 'dangerously' })
  return window.document
}
