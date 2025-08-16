export const config = { runtime: 'edge' }

const corsHeaders: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const jsonCorsHeaders: Record<string, string> = {
  ...corsHeaders,
  'Content-Type': 'application/json',
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders })
  }

  if (req.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: jsonCorsHeaders,
    })
  }

  return new Response(
    JSON.stringify({
      ok: true,
      runtime: 'edge',
      timestamp: new Date().toISOString(),
      service: 'vercel-edge',
    }),
    { status: 200, headers: jsonCorsHeaders }
  )
}
