// netlify/functions/github-proxy.js
// GitHub API Proxy - Keeps token secure

exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  // Get environment variables
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const GITHUB_USER = process.env.GITHUB_USER;
  const GITHUB_REPO = process.env.GITHUB_REPO;

  if (!GITHUB_TOKEN || !GITHUB_USER || !GITHUB_REPO) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Server configuration error. Set GITHUB_TOKEN, GITHUB_USER, GITHUB_REPO in Netlify env vars.' })
    };
  }

  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const { path, method, data } = body;

    if (!path) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing path parameter' })
      };
    }

    // Build GitHub API URL
    const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${path}`;

    // GitHub API request
    const options = {
      method: method || 'GET',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Team-Availability-System'
      }
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('GitHub API Error:', response.status, errorText);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ 
          error: `GitHub API error: ${response.status}`,
          details: errorText 
        })
      };
    }

    const result = await response.json();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(result)
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      })
    };
  }
};
