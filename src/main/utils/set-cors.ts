import { BrowserWindow } from 'electron'

export function setCORS(win: BrowserWindow) {
    win.webContents.session.webRequest.onBeforeSendHeaders((details, callback) => {
        const { requestHeaders } = details
        if (requestHeaders) {
            requestHeaders['Access-Control-Allow-Origin'] = '*'
        }
        callback({ requestHeaders })
    })

    win.webContents.session.webRequest.onHeadersReceived((details, callback) => {
        const { responseHeaders } = details
        if (responseHeaders) {
            responseHeaders['Access-Control-Allow-Origin'] = ['*']
            responseHeaders['Access-Control-Allow-Headers'] = ['*']
        }
        callback({
            responseHeaders
        })
    })
}
