import { createOpenRouter } from '@openrouter/ai-sdk-provider'

const openrouter = createOpenRouter({
    apiKey: (import.meta.env as any).VITE_OPENROUTER_API_KEY
})

const deepkseekChat = openrouter('deepseek/deepseek-chat-v3-0324:free') as any

export { deepkseekChat, openrouter }
