import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { generate } from '@/hooks/ai'

function App(): React.JSX.Element {
    const [text, setText] = useState('')
    return (
        <>
            <Button
                onClick={async () => {
                    const result = await generate('message')
                    setText(result)
                }}
            >
                Click me
            </Button>
            <div>{text}</div>
        </>
    )
}

export default App
