const express = require('epxress');
const app = express();
const port = process.env.port || 3000;

app.use(express.static('public'));

app.get('/', (req, res)=> {
    res.send('hi');
})

app.listen(port, ()=>{
    console.log(`LISTENING ON PORT ${port}`);
})