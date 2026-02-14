import { useChat } from '@ai-sdk/react'

export default function Page() {
    const { messages, status } = useChat({})

    return (
        <div>
            {messages.map((message) => (
                <div key={message.id}>
                    <strong>{`${message.role}: `}</strong>
                </div>
            ))}

            <form>
                <input value={''} placeholder="Send a message..." disabled={status !== 'ready'} />
            </form>
        </div>
    )
}
