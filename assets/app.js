window.addEventListener('message', handleMessage, false);            
          
function handleMessage (message) {
        $('#task-context').val(JSON.stringify(message.data,null, 4))
        console.log('context-received ->', message.data)
}

//send a message to parent
function sendMessage(type){
    parent.postMessage({type: type, data: {here: 'your data sample'}}, '*')
}

//request a new message context to parent
function requestContext(){
    parent.postMessage({type: 'get-context'}, '*')
}
