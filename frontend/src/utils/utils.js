const getApiUrl = (path) => {
  const apiUrl = 'http://0.0.0.0:3000/';
  return `${apiUrl}${path}`;
  }

export default getApiUrl;