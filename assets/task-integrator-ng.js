(function(){

    angular.module("task-integrator", []).service('TaskIntegrator', TaskIntegrator);

    function TaskIntegrator(){
        var vm = this;
        vm.done = done
        vm.dismiss = dismiss
        vm.context = {};
        vm.initialize= initialize

        window.addEventListener('message', handleMessage, false);            
            
        function handleMessage (message) {
            vm.context = message.data
        }

        function done(){
            parent.postMessage({type: 'done'}, '*')
        }

        function dismiss(){
            parent.postMessage({type: 'dismiss'}, '*')
        }

        function initialize(){
            parent.postMessage({type: 'get-context'}, '*')
        }

        function sendMessage(type, data){
            parent.postMessage({type: type, data: data}, '*')
        }        

    }

})()