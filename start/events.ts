import emitter from '@adonisjs/core/services/emitter'
import string from '@adonisjs/core/helpers/string'
import logger from '@adonisjs/core/services/logger'

// HTTP
emitter.on('http:request_completed', (event) => {
  const method = event.ctx.request.method()
  const url = event.ctx.request.url(true)
  const duration = event.duration
  const status = event.ctx.response.response.statusCode
  const statusMessage = event.ctx.response.response.statusMessage

  logger.info(
    `[HTTP] - ${method} ${url}: ${string.prettyHrTime(duration)} - ${status} ${statusMessage}`
  )
})
