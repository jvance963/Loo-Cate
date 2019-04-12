const serverUrl = window.location.host.includes('localhost')
  ? 'http://localhost:3001'
  : 'http://quirky-wing.surge.sh/';

export default serverUrl;
