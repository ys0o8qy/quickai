import Versions from '@/components/Versions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Thread } from '@/components/assistant-ui/thread'

function App(): React.JSX.Element {
    // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

    return (
        <>
            <Button>Click me</Button>
            <Input></Input>
            <div className="h-full">
                <Thread />
            </div>

            <Versions></Versions>
        </>
    )
}

export default App
