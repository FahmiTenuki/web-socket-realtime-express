const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const  http = require('http');
const webSocket = require('ws');

const app = express();
const port = 3001;
const server = http.createServer(app);
const wss = new webSocket.Server({ server });
const Hostname = "127.0.0.1";
const corsOption = {
    origin: ["http://127.0.0.1:3001"]
}
app.use(cors(corsOption))
app.use(bodyParser.json())
wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(`RECEIVED: ${message}`);
    })
    wss.on('close', () => console.log('websocket disconnected'));
})

app.post('/send-message', (req, res) => {
    const { name, message } = req.body

    if(!name || !message) {
        return res.status(400).json({ message: 'Name and message must be filled!' });
    }
    try {
        wss.clients.forEach(client => {
            if (client.readyState === webSocket.OPEN) {
                client.send(JSON.stringify({ name, message }))
            }
        })
        res.json({ 
            success: true,
            message: 'Message sent successfully!',
            contentmessage: message,
            name: name
        }) 
    }
    catch (error) {
        console.log(`Error sending notif: ${error}`)              
        res.status(500).json({
            message: 'ERR',
            error: error
        })
    }
})


server.listen(port, () => console.log(`web server start at http://${Hostname}:${port}`));