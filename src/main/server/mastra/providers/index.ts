import { createOpenRouter } from '@openrouter/ai-sdk-provider'
import { LanguageModel } from 'ai'

const openrouter = createOpenRouter({
    apiKey: (import.meta.env as any).VITE_OPENROUTER_API_KEY
})

const deepkseekChat: LanguageModel = openrouter('deepseek/deepseek-chat-v3-0324:free')

export { deepkseekChat, openrouter }
