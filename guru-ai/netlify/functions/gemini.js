exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const GEMINI_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_KEY) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server API key tidak dikonfigurasi.' }) };
  }

  let body;
  try { body = JSON.parse(event.body); } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Request tidak valid.' }) };
  }

  const { prompt, imageMode } = body;
  if (!prompt) return { statusCode: 400, body: JSON.stringify({ error: 'Prompt diperlukan.' }) };

  try {
    const model = imageMode
      ? 'gemini-2.0-flash-exp-image-generation'
      : 'gemini-2.5-flash';

    const requestBody = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: imageMode
        ? { temperature: 0.7, maxOutputTokens: 8192, responseModalities: ['TEXT', 'IMAGE'] }
        : { temperature: 0.7, maxOutputTokens: 8192 }
    };

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      }
    );

    const data = await res.json();
    if (!res.ok) throw new Error(data.error?.message || 'Gemini API error');

    // Proses semua parts (teks + gambar)
    const parts = data.candidates?.[0]?.content?.parts || [];
    const resultParts = parts.map(part => {
      if (part.text) return { type: 'text', content: part.text };
      if (part.inlineData) return {
        type: 'image',
        mimeType: part.inlineData.mimeType,
        data: part.inlineData.data
      };
      return null;
    }).filter(Boolean);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ parts: resultParts })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
