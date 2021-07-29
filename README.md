<h1> nestjs-i18n blocks my local passport strategy</h1>

<h2> Reproduce the Issue: <h2>

- run server : npm start

- access http://localhost:3000/authentication/login

- result: internal server error 'Unknown authentication strategy "local"'

  -> it works as soon as you remove the I18nRequestScopeService in authentication.service.ts

