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

 window.addEventListener('message', receiveTaskMessage, false);            
          
 function receiveTaskMessage (message) {                
    console.log(message)
 }
```

## How to send messages to task
All you have to do is add an event listener to capture the message:

```javascript

 parent.postMessage({type: 'done', data: {someData: 'your data sample'}}, '*')

```


# Run this project
It is silly, just execute the commands bellow

Install the dependencies
`npm install`

Run the server
`http-server`