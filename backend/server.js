
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Pusher = require("pusher");
const app = express()
const port = 1000


const pusher = new Pusher({
  appId: "1222057",
  key: "b2c1c07e2a40ad08398c",
  secret: "7c519c5551e3dd6464a7",
  cluster: "mt1",
  useTLS: true
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json())
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/addpesan",(req,res)=>{
	const body = req.body;
	pusher.trigger("my-chat", "my-message", body);
	res.send(body);
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})