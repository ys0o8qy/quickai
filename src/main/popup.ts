import { BrowserWindow } from 'electron'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'
import debug from 'debug'

const log = debug('electron-app:popup')

let popupWindow: BrowserWindow | null = null

function createPopup(): BrowserWindow {
  // Create the browser window.
  popupWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? {} : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    popupWindow.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/popup.html')
  } else {
    popupWindow.loadFile(join(__dirname, '../renderer/popup.html'))
  }

  return popupWindow
}

export function displayPopup(): void {
  log('displayPopup')
  if (popupWindow && !popupWindow.isDestroyed()) {
    log('displayPopup: popupWindow is not destroyed')
    popupWindow.show()
  } else {
    log('displayPopup: popupWindow is destroyed')
    popupWindow = createPopup()
    popupWindow.show()
  }
}
