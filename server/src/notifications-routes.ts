import WebPush from 'web-push'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'


const publicKey = 'BHSO71n6OzeA1cJU_NMlLBo60zkGKZxAewGy-X2riB5BfafqruVmUix-JIn-1AOEFY3dYmrsHt6EHJTkYXhTUTQ'
const privateKey = 'K_sPF0UCCv1UPy_KnhbCO6xshRwLslPXRu9ceYLEiVk'

WebPush.setVapidDetails(
  'http://localhost:3333',
  publicKey,
  privateKey
)

export async function notificationRoutes(app: FastifyInstance) { 
  app.get('/push/public_key', () => {
    return {
      publicKey,
    }
  })

  app.post('/push/register', (request, response) => {
    console.log(request.body)
    return response.status(201).send()
  })

  app.post('/push/send', (request, response) => {
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string()
        })
      })
    })
    const { subscription } = sendPushBody.parse(request.body)

    console.log(subscription)

    setTimeout(() => {
      WebPush.sendNotification(subscription, 'Hello do backend')
    }, 5000)


    return response.status(201).send()
  })
}
