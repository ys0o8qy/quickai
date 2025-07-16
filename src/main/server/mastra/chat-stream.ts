import { mastra } from './index'
import type { Request, Response } from 'express'
import { createDataStreamResponse } from 'ai'

export async function POST(req: Request) {
    const { messages } = await req.body
    const myAgent = mastra.getAgent('weatherAgent')
    const agentStream = await myAgent.stream(messages)

    const response = createDataStreamResponse({
        status: 200,
        statusText: 'OK',
        headers: {
            'Custom-Header': 'value'
        },
        async execute(dataStream) {
            dataStream.writeData({ value: 'Hello' })

            dataStream.writeMessageAnnotation({
                type: 'status',
                value: 'processing'
            })

            agentStream.mergeIntoDataStream(dataStream)
        },
        onError: (error) => `Custom error: ${error}`
    })

    return response
}
