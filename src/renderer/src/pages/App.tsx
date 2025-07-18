import { TestThread } from '@/components/TestThread'
import { ThemeProvider } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'

function App(): React.JSX.Element {
    return (
        <ThemeProvider>
            <div className="h-full">
                <Button>Click me</Button>
                <TestThread />
            </div>
        </ThemeProvider>
    )
}

export default App
