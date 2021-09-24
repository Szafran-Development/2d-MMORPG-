// eslint-disable-next-line @typescript-eslint/no-var-requires
const io = require('socket.io')

const gameSocket = io(3001, {
    path: '/',
})

gameSocket.on('connection', (socket) => {
    console.log('Podłączono ' + socket)
})
