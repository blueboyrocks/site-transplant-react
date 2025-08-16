import type { Handler } from '@netlify/functions'

export const handler: Handler = async () => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ok: true,
      runtime: 'node-18',
      timestamp: new Date().toISOString(),
      service: 'netlify-functions'
    }),
  }
}