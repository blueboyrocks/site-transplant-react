import { NextRequest, NextResponse } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return NextResponse.json(
      { error: 'Method not allowed' },
      { status: 405 }
    )
  }

  try {
    // Get the Make.com webhook URL from environment
    const makeWebhookUrl = process.env.MAKE_WEBHOOK_URL
    
    if (!makeWebhookUrl) {
      console.error('MAKE_WEBHOOK_URL environment variable not set')
      return NextResponse.json(
        { error: 'Webhook not configured' },
        { status: 500 }
      )
    }

    // Parse the incoming request body
    const body = await req.json()
    
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
      return NextResponse.json(
        { error: 'Webhook submission failed' },
        { status: 500 }
      )
    }

    // Return success response
    return NextResponse.json(
      { 
        ok: true, 
        requestId: webhookPayload.requestId,
        message: 'Form submitted successfully' 
      },
      { 
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      }
    )

  } catch (error) {
    console.error('Webhook proxy error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}