var request = require('request');

const DME_API = 'https://dme.inform.com';
const WATCHDOG = 'watchdog';

console.log(request);

function authenticate({ login, password, partnerContext }) {
  request(`${DME_API}/${WATCHDOG}/authenticate`, {
    method: 'POST',
    body: {
      login: login,
      password: password,
      partnerContext: partnerContext
    }
  }, function(error, response, body) {
    console.log(body);
  });
}

window.addEventListener('keydown', e => {
  console.log(e);
  if (e.code == 'Enter') {
    authenticate({
      login: 'xxx',
      password: 'xxx',
      partnerContext: -1
    });
  }
});
