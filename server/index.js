const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const {addUser, removeUser, getUser, getUsersInChannel} = require('./Users.js');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket)=>{
    socket.on('join',({name,channel},callback)=>{

        const {error,user} = addUser({id:socket.id,name:name,channel:channel});
        if(error) return callback(error);

        socket.join(user.channel);
    
        socket.emit('message',{user:'admin',text:`Welcome ${user.name} to ${user.channel}`});
        socket.broadcast.to(channel).emit('message',{user:'admin' ,text: `${user.name} has joined`});

        callback();
    });

    socket.on('sendMessage',(message,callback)=>{
        const user = getUser(socket.id);
        io.to(user.channel).emit('message',{user:user.name,text:message})
        callback();
    })

    socket.on('disconnect',()=>{
        console.log(">> user left");
    })
})

app.use(router);
server.listen(PORT,()=>{
    console.log(`Server Started on port ${PORT}`);
} )

