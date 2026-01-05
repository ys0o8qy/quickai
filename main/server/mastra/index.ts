import { Mastra } from '@mastra/core/mastra'
import { PinoLogger } from '@mastra/loggers'
import { LibSQLStore } from '@mastra/libsql'
import { registerCopilotKit } from '@ag-ui/mastra'
import { weatherAgent } from './agents/weather-agent'

export const mastra = new Mastra({
    agents: { weatherAgent },
    storage: new LibSQLStore({
        // stores telemetry, evals, ... into memory storage,
        // if you need to persist, change to file:../mastra.db
        url: ':memory:'
    }),
    logger: new PinoLogger({
        name: 'Mastra',
        level: 'info'
    }),
    server: {
        // We will be calling this from a Vite App. Allow CORS
        cors: {
            origin: '*',
            allowMethods: ['*'],
            allowHeaders: ['*']
        },
        apiRoutes: [
            registerCopilotKit({
                path: '/copilotkit',
                resourceId: 'weatherAgent',
                setContext: (c, runtimeContext) => {
                    // Add whatever you need to the runtimeContext
                    runtimeContext.set('user-id', c.req.header('X-User-ID'))
                    runtimeContext.set('temperature-scale', 'celsius')
                }
            })
        ]
    }
})
