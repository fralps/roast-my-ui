import emitter from '@adonisjs/core/services/emitter'
import app from '@adonisjs/core/services/app'
import string from '@adonisjs/core/helpers/string'
import db from '@adonisjs/lucid/services/db'
import logger from '@adonisjs/core/services/logger'

// HTTP
emitter.on('http:request_completed', (event: any) => {
  const method = event.ctx.request.method()
  const url = event.ctx.request.url(true)
  const duration = event.duration
  const status = event.ctx.response.response.statusCode
  const statusMessage = event.ctx.response.response.statusMessage

  logger.info(
    `[HTTP] - ${method} ${url}: ${string.prettyHrTime(duration)} - ${status} ${statusMessage}`
  )
})

// DB
emitter.on('db:query', (query) => {
  if (app.inProduction) {
    logger.debug(`[DATABASE] - ${query}`)
  } else {
    db.prettyPrint(query)
  }
})
