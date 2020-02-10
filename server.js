require('marko/node-require').install();
require('marko/express');

const app = require('./src/config/custom-express');
const route = require('./src/app/routes/routes');
route(app);

app.listen(3000, ()=>{
    console.log('Server inited - Port: 3000');
});