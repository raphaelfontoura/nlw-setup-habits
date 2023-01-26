import Fastify from 'fastify'
import cors from '@fastify/cors'
import { prisma } from './lib/prisma'
import { appRoute } from './routes'
import { notificationRoutes } from './notifications-routes'

const app = Fastify()

app.register(cors)
app.register(appRoute)
app.register(notificationRoutes)

app.listen({
  port: 3333,
  host: '0.0.0.0',
}).then(() => {
  console.log(`HTTP Server running on port 3333`)
})