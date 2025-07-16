import { BrowserWindow } from 'electron'

// function UpsertKeyValue(obj: Record<string, string>, keyToChange: string, value: string[]) {
//     const keyToChangeLower = keyToChange.toLowerCase()
//     for (const key of Object.keys(obj)) {
//         if (key.toLowerCase() === keyToChangeLower) {
//             // Reassign old key
//             obj[key] = value
//             // Done
//             return
//         }
//     }
//     // Insert at end instead
//     obj[keyToChange] = value
// }

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
