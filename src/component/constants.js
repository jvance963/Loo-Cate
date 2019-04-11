const serverUrl = window.location.host.includes('localhost')
  ? 'http://localhost:3001'
  : 'http://localhost:3000';

export default serverUrl;
