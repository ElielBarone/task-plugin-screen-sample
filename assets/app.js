window.addEventListener('message', handleMessage, false);            
          
function handleMessage (message) {
        $('#task-context').val(JSON.stringify(message.data,null, 4))
}

//send a message to parent
function sendMessage(type){
    parent.postMessage({type: type, data: {here: 'your data sample'}}, '*')
}
