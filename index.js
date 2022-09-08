const express = require('express');
const path = require('path');

const app = express();

// const options = {
//   caseSensitive: false
// }
// var router = express.Router(options)

// router.all('*', () => {
//   next()
// })

app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//   res.sendFile('fidget.html', { 
//     root: path.join(__dirname, '/Fidget') }
//   );
// });

app.listen(3000, () => {
  console.log('Server started: ' + new Date().toUTCString());
});

// const express = require('express');
// const path = require('path');

// const app = express();

// app.use(express.static('Fidget'))

// app.get('/', (req, res) => {
//   res.sendFile('fidget.html', { 
//     root: path.join(__dirname, '/Fidget') }
//   );
// });

// app.listen(3000, () => {
//   console.log('server started');
// });
