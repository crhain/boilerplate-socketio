$( document ).ready(function() {
  
  /*global io*/
  var socket = io();
  
  socket.on('user', function(data){
    var message = data.name;
    message += data.connected ? ' has joined the chat.' : ' has left the chat.'; 
    $('#num_users').text(data.currentUsers + ' users online');    
    $('#messages').append('<li> <b>' + message + '</b></li>');
  });
   
  // Form submittion with new message in field with id 'm'
  $('form').submit(function(){
    var messageToSend = $('#m').val();
    //send message to server here?
    $('#m').val('');
    return false; // prevent form submit from refreshing page
  });
  

  
});
