// import { MastraAgent } from '@ag-ui/mastra'
// import {
//     CopilotRuntime,
//     ExperimentalEmptyAdapter,
//     copilotRuntimeNodeExpressEndpoint
// } from '@copilotkit/runtime'

// // import { MastraAgent } from '@ag-ui/mastra'
// import { MastraClient } from '@mastra/client-js'

// // 1. Base address for the Mastra server
// const MASTRA_URL = process.env.MASTRA_URL || 'http://localhost:3001'

// // 2. You can use any service adapter here for multi-agent support. We use
// //    the empty adapter since we're only using one agent.
// const serviceAdapter = new ExperimentalEmptyAdapter()

// // 3. Create the CopilotRuntime instance and utilize the Mastra AG-UI
// //    integration to get the remote agents.
// const runtime = new CopilotRuntime({
//     agents: await MastraAgent.getRemoteAgents({
//         mastraClient: new MastraClient({ baseUrl: MASTRA_URL })
//     })
// })

// // 4. Build a Next.js API route that handles the CopilotKit runtime requests.
// export const POST = async (req: Request, ctx: any) => {
//     const { handleRequest } = copilotRuntimeNodeExpressEndpoint({
//         runtime,
//         serviceAdapter,
//         endpoint: '/api/copilotkit'
//     })

//     return handleRequest(req, ctx)
// }

// /**
//  * @filePath server.ts
//  */
// import { createServer } from 'node:http'
// import { OpenAIAdapter, copilotRuntimeNodeHttpEndpoint } from '@copilotkit/runtime'

// const openai = new OpenAI()
// const serviceAdapter = new OpenAIAdapter({ openai })

// const runtime = new CopilotRuntime()

// const copilotRuntime = copilotRuntimeNodeHttpEndpoint({
//     endpoint: '/copilotkit',
//     runtime,
//     serviceAdapter
// })

// const server = createServer((req, res) => {
//     return copilotRuntime(req, res)
// })

// server.listen(4000, () => {
//     console.log('Listening at http://localhost:4000/copilotkit')
// })
