const serverUrl = window.location.host.includes('localhost')
  ? 'http://localhost:3001'
  : 'https://morning-sands-23907.herokuapp.com/';

export default serverUrl;
