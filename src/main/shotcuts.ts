import { globalShortcut } from 'electron'
import { displayPopup } from './popup'

export function registerShortcuts(): void {
    const shortcut = globalShortcut.register('CommandOrControl+Shift+E', () => {
        displayPopup()
    })
    if (!shortcut) {
        console.error('Failed to register shortcut')
    }
}
