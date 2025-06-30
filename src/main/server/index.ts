import 'dotenv/config'
import express from 'express'
import type { Request, Response } from 'express'

import { mastra } from './mastra/index'

const app = express()
const port = process.env.PORT ?? 3000

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
        console.error('Agent error:', error)
        res.status(500).send('An error occurred while processing your request')
    }
})

// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`)
// })

export default app