// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { BrowserWindow } = require('electron')
const win = new BrowserWindow({
  webPreferences: {
    preload: 'path/to/preload.js'
  }
})