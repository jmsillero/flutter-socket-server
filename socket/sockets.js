const {io} = require('../index')

//Socket messages
io.on('connection', client => { 
    console.log('Client connected')
    client.on('disconnect', () => {console.log('Client disconnected')})

    client.on('message', (payload) =>{
        console.log('Message', payload)

        io.emit('reply', {message: 'Hello from server'})
    })
})
