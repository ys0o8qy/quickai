import Versions from '@/components/Versions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Page from '@/components/use-chat-example'

function App(): React.JSX.Element {
    // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

    return (
        <>
            <Button>Click me</Button>
            <Input></Input>
            <Page></Page>

            <Versions></Versions>
        </>
    )
}

export default App
