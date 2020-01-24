export class Http {
  static HEADERS = { 'Content-Type': 'application/json' };

  static async get(url) {
    return await request(url, 'GET');
  }

  static async post(url, data = {}) {
    return await request(url, 'POST', data);
  }
}

async function request(url, method = 'GET', data) {
  const config = {
    method,
    headers: Http.HEADERS
  };

  if (method === 'POST') {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(`http://193.124.114.46:3001/${url}`, config);
  return await response;
}
