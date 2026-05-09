export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ status: 'MoneyFusion Webhook OK' });
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const body = JSON.stringify(req.body);
    const response = await fetch('http://185.247.118.218:8084/relay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body,
    });
    const text = await response.text();
    return res.status(200).json({ status: 'ok', relay: text });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
      }
