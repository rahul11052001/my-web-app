const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/', routes);
app.use('/api', require('./routes/api'));

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
