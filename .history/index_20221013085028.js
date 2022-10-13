// start your server here
const server = require('./api/server')


server.get('/', (req, res) =>{
    res.json('Welcome!')
})

const port = 5000

server.listen(port, () => {
    console.log(`listening on port ${port}`)
})