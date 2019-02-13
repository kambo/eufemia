/**
 * Jest Setup for Screenshot testing
 *
 */

const chalk = require('chalk')
// const serve = require('gatsby/dist/commands/serve')
const puppeteer = require('puppeteer')
const mkdirp = require('mkdirp')
const path = require('path')
const fs = require('fs')
const isCI = require('is-ci')
const liveServer = require('live-server')
const detectPort = require('detect-port')
const packpath = require('packpath')
const {
  DIR,
  testScreenshotOnHost,
  testScreenshotOnPort
} = require('./jestSetupScreenshots')

const startStaticServer = () =>
  new Promise(async resolve => {
    {
      const portIsAvailable = await detectPort(testScreenshotOnPort)
      if (testScreenshotOnPort === portIsAvailable) {
        const root = path.resolve(
          packpath.self(),
          '../dnb-design-system-portal/public/'
        )
        // we do not use gatsby serve, as the thread hangs on
        // serve({
        //   directory: root,
        //   open: false,
        //   host: testScreenshotOnHost,
        //   port: testScreenshotOnPort
        // })
        const params = {
          host: testScreenshotOnHost,
          port: testScreenshotOnPort,
          root,
          open: false,
          watch: [],
          quiet: isCI,
          wait: 10e3
        }
        const server = liveServer.start(params)
        const onDone = () => {
          server.removeListener('listening', onDone)
          resolve()
        }
        server.addListener('listening', onDone)
      } else {
        resolve()
      }
    }
  })

module.exports = async function() {
  console.log(chalk.green('Setup Puppeteer'))
  await startStaticServer()

  const headless = true
  const browser = await puppeteer.launch({
    headless,
    devtools: !headless,
    // to get rid of the "libX11-xcb.so" missing problem, we set these flags
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  // store the browser instance so we can teardown it later
  // this global is only available in the teardown but not in TestEnvironments
  global.__BROWSER_GLOBAL__ = browser

  // use the file system to expose the wsEndpoint for TestEnvironments
  mkdirp.sync(DIR)
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint())
}
