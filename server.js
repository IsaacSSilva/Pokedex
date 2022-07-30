const express = require('express');
const app = express();

app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

  res.render('pages/index')
})

app.listen(8080);
console.log('\n aah!, Servidor Rodando 🎉👏 \n')