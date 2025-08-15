import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    }
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    // Get the Make.com webhook URL from environment
    const makeWebhookUrl = process.env.MAKE_WEBHOOK_URL
    
    if (!makeWebhookUrl) {
      console.error('MAKE_WEBHOOK_URL environment variable not set')
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Webhook not configured' }),
      }
    }

    // Parse the incoming request body
    const body = JSON.parse(event.body || '{}')
    
    // Add server-side metadata
    const webhookPayload = {
      ...body,
      serverTimestamp: new Date().toISOString(),
      requestId: crypto.randomUUID(),
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
      console.error('Make.com webhook failed:', response.status, response.statusText)
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Webhook submission failed' }),
      }
    }

    // Return success response
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        ok: true,
        requestId: webhookPayload.requestId,
        message: 'Form submitted successfully',
      }),
    }

  } catch (error) {
    console.error('Webhook proxy error:', error)
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Internal server error' }),
    }
  }
}