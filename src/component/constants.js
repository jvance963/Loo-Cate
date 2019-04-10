const serverUrl = window.location.host.includes('localhost')
  ? 'http://localhost:3000'
  : 'http://localhost:3001';

export default serverUrl;
