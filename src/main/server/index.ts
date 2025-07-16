import 'dotenv/config'
import express from 'express'
import type { Request, Response } from 'express'

import { mastra } from './mastra/index'
import { streamText } from 'ai'
import { deepkseekChat } from './mastra/providers'

const app = express()

app.get('/api/weather', async (req: Request, res: Response): Promise<void> => {
    const { city } = req.query as { city?: string }

    res.header('Access-Control-Allow-Origin', '*')
    if (!city) {
        res.status(400).send("Missing 'city' query parameter")
        return
    }

    const agent = mastra.getAgent('weatherAgent')

    try {
        const result = await agent.generate(`What's the weather like in ${city}?`)
        res.send(result.text)
    } catch (error) {
        console.error('Agent error:', error)
        res.status(500).send('An error occurred while processing your request')
    }
})

app.post('/chat', async (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*')
    console.error('receive request')
    const result = streamText({
        model: deepkseekChat,
        prompt: 'Invent a new holiday and describe its traditions.'
    })

    result.pipeDataStreamToResponse(res)
})

// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`)
// })

export default app
