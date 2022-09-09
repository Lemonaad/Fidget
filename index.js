const express = require('express');
const path = require('path');

const app = express();

const { getUserInfo } = require("@replit/repl-auth")

const options = {
  caseSensitive: false
}
var router = express.Router(options)

// app.get('/', (req, res) => {
//   console.log("Hello, world")

  
  // const user = getUserInfo(req)
  
// })

app.get('/', (req, res) => {

  const user = getUserInfo(req)
  
  if (user !== null) {
    console.log("Name: " + user.name);
    res.send(user.name);
    res.end()
    return;
  }
  
  res.sendFile('index.html', { 
    root: path.join(__dirname, '/public') }
  );
});

app.get('/logout', (req, res) => {

  const user = getUserInfo(req)
  
  if (user !== null) {
    console.log("Name: " + user.name);
    const cookie = `REPL_AUTH=deleted; httpOnly; Secure; SameSite=None; Domain=.fidget.axelszolusha.repl.co; Expires=${new Date().toUTCString()}`;

    res.set('Set-Cookie', cookie)
    
    res.send("Success!")
    console.log("logout")
    return;
  }

  // res.cookies.set('REPL_AUTH', {expires: Date.now()})
  
  res.sendFile('index.html', { 
    root: path.join(__dirname, '/public/login') }
  );

  res.end()
});

app.use(express.static(path.join(__dirname, 'public')))

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
