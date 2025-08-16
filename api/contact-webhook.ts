export const config = { runtime: 'edge' }

const corsHeaders: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const jsonCorsHeaders: Record<string, string> = {
  ...corsHeaders,
  'Content-Type': 'application/json',
}

// Fallback URL to ensure production works even if env var isn't set yet
const FALLBACK_MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/esonrv674fe7exxmtxrjy9unqx8ifut5'

export default async function handler(req: Request): Promise<Response> {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    })
  }

  // Handle health ping
  if (req.method === 'GET') {
    const url = new URL(req.url)
    const ping = url.searchParams.get('ping')
    if (ping) {
      return new Response(
        JSON.stringify({
          ok: true,
          service: 'vercel-edge-contact-webhook',
          timestamp: new Date().toISOString(),
        }),
        { status: 200, headers: jsonCorsHeaders }
      )
    }
    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: jsonCorsHeaders,
    })
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: jsonCorsHeaders,
    })
  }

  try {
    // Use the correct webhook URL directly to bypass incorrect env var
    const makeWebhookUrl = 'https://hook.us2.make.com/esonrv674fe7exxmtxrjy9unqx8ifut5'

    // Parse the incoming request body
    const body = await req.json().catch(() => ({}))

    // Add server-side metadata
    const requestId = crypto.randomUUID()
    const webhookPayload = {
      ...body,
      serverTimestamp: new Date().toISOString(),
      requestId,
      userAgent: req.headers.get('user-agent') || undefined,
      referer: req.headers.get('referer') || undefined,
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
      return new Response(JSON.stringify({ error: 'Webhook submission failed' }), {
        status: 500,
        headers: jsonCorsHeaders,
      })
    }

    // Return success response
    return new Response(
      JSON.stringify({ ok: true, requestId, message: 'Form submitted successfully' }),
      {
        status: 200,
        headers: jsonCorsHeaders,
      }
    )
  } catch (error) {
    console.error('Webhook proxy error:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: jsonCorsHeaders,
    })
  }
}
