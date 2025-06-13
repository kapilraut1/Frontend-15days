const express = require('express')
const app = express()
const port = 3000

const cors= require('cors')

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/signup', (req, res) => {
  console.log('Received signup data:', req.body);
  res.status(201).json({ message: 'User registered successfully!' });
  res.send("Yo received the data. I am proud of you")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
