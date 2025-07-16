import { CopilotChat } from '@copilotkit/react-ui'
import { CopilotKit } from '@copilotkit/react-core'
import '@copilotkit/react-ui/styles.css'

export function CopilotKitComponent() {
    return (
        <CopilotKit runtimeUrl="http://localhost:3001/copilotkit" agent="weatherAgent">
            <CopilotChat
                labels={{
                    title: 'Your Assistant',
                    initial: 'Hi! 👋 How can I assist you today?'
                }}
            />
        </CopilotKit>
    )
}
