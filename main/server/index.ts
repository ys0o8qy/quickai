import 'dotenv/config'
import express from 'express'
import type { Request, Response } from 'express'
import { streamText } from 'ai'
import { deepkseekChat } from './mastra/providers'
import { mastra } from './mastra/index'
import debug from 'debug'

const app = express()
const log = debug('server')

app.use(express.json())

app.get('/api/weather', async (req: Request, res: Response): Promise<void> => {
    const { city } = req.query as { city?: string }

    if (!city) {
        res.status(400).send("Missing 'city' query parameter")
        return
    }

    const agent = mastra.getAgent('weatherAgent')

    try {
        const result = await agent.generate(`What's the weather like in ${city}?`)
        res.send(result.text)
    } catch (error) {
        log('Agent error:', error)
        res.status(500).send('An error occurred while processing your request')
    }
})

app.post('/chat', async (req: Request, res: Response) => {
    const body = req.body

    const messages = body.messages || []
    log('messages', messages)
    const result = streamText({
        model: deepkseekChat,
        messages: messages
    })

    result.pipeDataStreamToResponse(res)
})


export default app
