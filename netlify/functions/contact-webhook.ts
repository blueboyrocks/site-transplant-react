import type { Handler } from '@netlify/functions'
import { randomUUID } from 'crypto'

const FALLBACK_MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/esonrv674fe7exxmtxrjy9unqx8ifut5'

const commonHeaders: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export const handler: Handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        ...commonHeaders,
      },
      body: '',
    }
  }

  // Handle health ping
  if (event.httpMethod === 'GET') {
    const ping = event.queryStringParameters?.ping
    if (ping) {
      return {
        statusCode: 200,
        headers: {
          ...commonHeaders,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ok: true,
          service: 'netlify-functions-contact-webhook',
          timestamp: new Date().toISOString(),
        }),
      }
    }
    return {
      statusCode: 404,
      headers: {
        ...commonHeaders,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'Not found' }),
    }
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        ...commonHeaders,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  // Generate a request id early so we can include it in all responses
  const requestId = (typeof randomUUID === 'function' ? randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`)

  try {
    // Prefer env var, fallback to provided webhook URL
    const makeWebhookUrl = (process.env.MAKE_WEBHOOK_URL && process.env.MAKE_WEBHOOK_URL.trim()) || FALLBACK_MAKE_WEBHOOK_URL

    // Parse the incoming request body (handle base64-encoded bodies)
    const rawBody = event.body || '{}'
    const decodedBody = event.isBase64Encoded ? Buffer.from(rawBody, 'base64').toString('utf8') : rawBody
    const body = JSON.parse(decodedBody)

    // Add server-side metadata
    const webhookPayload = {
      ...body,
      serverTimestamp: new Date().toISOString(),
      requestId,
      userAgent: event.headers['user-agent'],
      referer: event.headers['referer'] || event.headers['referrer'],
    }

    // Forward to Make.com webhook
    const response = await fetch(makeWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookPayload),
    })

    if (!response.ok) {
      console.error('Make.com webhook failed:', response.status, response.statusText, { requestId })
      return {
        statusCode: 500,
        headers: {
          ...commonHeaders,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Webhook submission failed', requestId }),
      }
    }

    // Return success response
    return {
      statusCode: 200,
      headers: {
        ...commonHeaders,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ok: true,
        requestId,
        message: 'Form submitted successfully',
      }),
    }
  } catch (error) {
    console.error('Webhook proxy error:', error, { requestId })
    return {
      statusCode: 500,
      headers: {
        ...commonHeaders,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'Internal server error', requestId }),
    }
  }
}
