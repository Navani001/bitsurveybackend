import Fastify from 'fastify'


const fastify = require('fastify')({
  logger: true
})

fastify.get('/', async (request:any, reply:any) => {
  return { hello: 'world' }
})

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()