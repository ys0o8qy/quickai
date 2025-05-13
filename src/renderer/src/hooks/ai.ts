import { streamText, generateText } from 'ai'
import { createOpenRouter } from '@openrouter/ai-sdk-provider'

const openrouter = createOpenRouter({
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY
})

export async function generate(text: string) {
  const result = await generateText({
    model: openrouter('deepseek/deepseek-chat-v3-0324:free'),
    prompt: text
  })
  return result.text
}
