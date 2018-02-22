const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'));


app.get('/', function (req, res) { 
	//res.send('Hullo World!')
	res.render('index');
})

app.get('/About', function (req, res) {
	res.render("about")
})

app.get('/Contact%20Us', function (req, res) {
        res.render("contact-us")
})

app.get('/Home', function (req, res) {
        res.render("index")
})

app.get('/Sign%20Up', function (req, res) {
        res.render("signup")
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))
