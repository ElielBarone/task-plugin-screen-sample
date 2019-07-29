window.taskIntegrator = (function(){    
    window.addEventListener('message', handleMessage, false);            
          
    function handleMessage (message) {
        taskIntegrator.context = message.data
    }

    function done(){
        parent.postMessage({type: 'done'}, '*')
    }

    function dismiss(){
        parent.postMessage({type: 'dismiss'}, '*')
    }

    function sendMessage(type, data){
        parent.postMessage({type: type, data: data}, '*')
    }

    var taskIntegrator = {
        done: done,
        dismiss: dismiss,
        sendMessage: sendMessage
    }

    return taskIntegrator;
})()