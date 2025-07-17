import { TestThread } from '@/components/TestThread'
import { Button } from '@/components/ui/button'

function App(): React.JSX.Element {
    return (
        <div className="h-full">
            <Button>Click me</Button>
            <TestThread />
        </div>
    )
}

export default App
