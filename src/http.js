export class Http {
  static HEADERS = { 'Content-Type': 'application/json' };

  static async get(url, token = '') {
    try {
      return await request(url, 'GET', null, token);
    } catch (e) {
      //console.log('Error GET', e);
      throw e;
    }
  }

  static async post(url, data = {}, token = '') {
    try {
      return await request(url, 'POST', data, token);
    } catch (e) {
      //console.log('Error POST', e);
      throw e;
    }
  }
}

async function request(url, method = 'GET', data, token = '') {
  if (token) {
    Http.HEADERS['Authorization'] = 'Bearer ' + token;
  }

  const config = {
    method,
    headers: Http.HEADERS
  };

  if (method === 'POST') {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(`http://193.124.114.46:3001/${url}`, config);
  if (!response.ok)
    // or check for response.status
    throw new Error(await response.text());
  return await response.json();
}
