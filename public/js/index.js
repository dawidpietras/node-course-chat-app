var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from:'Dave',
    text: 'That works'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected');
});

socket.on('newMessage', function (message) {
console.log('newMessage', message);

});
