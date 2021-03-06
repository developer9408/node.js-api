const express= require('express')
const app = express()

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/', function (req, res) {
    res.send('This is a demo Node.js API')
});

app.use(express.urlencoded({
    extended: true
}));
