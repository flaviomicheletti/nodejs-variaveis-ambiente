# Variáveis de ambiente no Node

https://www.npmjs.com/package/dotenv

Ele só permite um único arquivo `.env`.

__Should I commit my .env file ?__

No. We strongly recommend against committing your .env file to version control. It should only include environment-specific values such as database passwords or API keys. Your production database should have a different password than your development database.

__Should I have multiple .env files ?__

No. We strongly recommend against having a "main" .env file and an "environment" .env file like .env.test. Your config should vary between deploys, and you should not be sharing values between environments.


### Plugin para VSCode

https://github.com/zaynali53/DotENV


Segundo a documentação do plugin, seguem os possíveis nomes para o arquivo:

+ .env 
+ .env-sample 
+ .env.example 
+ .env.local 
+ .env.dev 
+ .env.dev.local 
+ .env.development 
+ .env.development.local 
+ .env.test .env.test.local 
+ .env.testing 
+ .env.qa 
+ .env.qa.local 
+ .env.uat 
+ .env.uat.local 
+ .env.stag 
+ .env.stag.local 
+ .env.staging 
+ .env.staging.local 
+ .env.production 
+ .env.production.local



### Multiplos ambientes

Uma boa solução seria o __cross-env__.

https://www.npmjs.com/package/cross-env

Ou nosso exemplo mesclando npm scripts com [um puco de JavaScript](multiples-env.js)

    "start":      "node index.js",
    "start:dev":  "set NODE_ENV=dev && node multiples-env.js",
    "start:qa":   "set NODE_ENV=qa && node multiples-env.js",
    "start:prod": "set NODE_ENV=prod && node multiples-env.js",
    "test":       "set NODE_ENV=test && node multiples-env.js"


### Leia também

- https://riptutorial.com/node-js/example/10101/setting-node-env--production-
- https://davidwells.io/blog/advanced-package-json-tips
