const serverUrl = window.location.host.includes('localhost')
  ? 'http://localhost:3001'
  : 'http://loocate.surge.sh/';

export default serverUrl;
