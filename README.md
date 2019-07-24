# Task Plugin Screen
This code is an example from how to comunicate with task throught messages.
The TASK send a initial message after the inicialization with the context like bellow:

```javascript
{ 
	token: 'INTEGRATION_TOKEN_FROM_LOGIN'
	apontamento: {}
	tarefa: {}
}
```

## How to receive the message
All you have to do is add an event listener to capture the message:

```javascript

 window.addEventListener('message', handleMessage, false);            
          
            function handleMessage (message) {                
                console.log(message)
            }
```