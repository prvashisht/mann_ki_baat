const express = require('express')
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static('./'))

app.get('/', function(request, response){
  response.end()
});

app.get('/getfiles', (req, res) => {
  res.status(200);
  let all_text = {};
  fs.readdirSync(__dirname + "/clean_3/", 'utf8').forEach(filename => {
    // hidden files starting with .
    if (filename[0] === ".") {
      return;
    }
    let filecontents = fs.readFileSync(__dirname + "/clean_3/" + filename, 'utf8')
    all_text[filename] = filecontents;
  });
  res.send(all_text);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
