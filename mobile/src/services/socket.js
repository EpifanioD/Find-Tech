import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.122:3333', {
    autoConnect: false,
});

function connect(){
    socket.connect();
}

function disconect(){
    if(socket.connect){
        socket.disconnect();
    }
}

export {
    connect,
    disconect,
};
