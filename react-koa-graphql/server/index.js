const bodyParser = require('koa-bodyparser');
const graphqlApi = require('./graphql');
const jwt = require('koa-jwt');
const Koa = require('koa');
const KoaMount = require('koa-mount');
const KoaStatic = require('koa-static');
const path = require('path');
const renderApp = require('./renderApp');

const app = new Koa();

app.use(KoaMount('/dist', KoaStatic(path.resolve(__dirname, '../dist'))));

app.use(
  jwt({
    passthrough: true,
    secret: process.env.APP_SECRET,
  })
);

app.use(bodyParser());
app.use(graphqlApi());
app.use(renderApp());

app.listen(process.env.PORT || 3000);
console.log(`Listening on http://localhost:${process.env.PORT || 3000}`);
