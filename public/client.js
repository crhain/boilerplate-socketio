$( document ).ready(function() {
  
  /*global io*/
  var socket = io();
  
  //listen for socket.io user message from server
  socket.on('user', function(data){
    var message = data.name;
    message += data.connected ? ' has joined the chat.' : ' has left the chat.'; 
    $('#num_users').text(data.currentUsers + ' users online');    
    $('#messages').append('<li> <b>' + message + '</b></li>');
  });

  //listen for socket.io 'chat message' message from server
  socket.on('chat message', function(data){
    var message = data.message;
    var name = data.name;
    $('#messages').append('<li><b>' + name + '</b>: ' + message + '</li>');
  });
   
  // Form submittion with new message in field with id 'm'
  $('form').submit(function(){
    var messageToSend = $('#m').val();
    //send message to server
    socket.emit('chat message', messageToSend);
    //clear chat box
    $('#m').val('');
    return false; // prevent form submit from refreshing page
  });
  

  
});
