import { CopilotPopup } from '@copilotkit/react-ui'
import { CopilotKit } from '@copilotkit/react-core'
import '@copilotkit/react-ui/styles.css'

export const TestThread = () => {
    return (
        <CopilotKit runtimeUrl="http://localhost:3001/chat">
            {/* <CopilotChat /> */}
            {/* <CopilotSidebar /> */}
            <CopilotPopup />
        </CopilotKit>
    )
}
