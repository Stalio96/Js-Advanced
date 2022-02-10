function requestValidator(httpObject){

    methodValidation(httpObject);
    uriValidation(httpObject);
    versionValidator(httpObject);
    messageValidator(httpObject);

    function methodValidation(httpObject){
        let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
        let propName = 'method'

        if(httpObject[propName] == undefined || !methods.includes(httpObject[propName])){
            throw Error(`Invalid request header: Invalid Method`);
        }
    }

    function uriValidation(httpObject){
        let uriRegex = /^\*|[a-zA-Z0-9.]+$/
        let propName = 'uri';

        if(httpObject[propName] == undefined || !uriRegex.test(httpObject[propName])){
            throw Error(`Invalid request header: Invalid URI`);
        }
    }

    function versionValidator(httpObject){
        let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
        let propName = 'version';

        if(httpObject[propName] == undefined || !versions.includes(httpObject[propName])){
            throw Error(`Invalid request header: Invalid Version`);
        }
    }

    function messageValidator(httpObject){
        let messageRegex = /^[^<>\\&'"]*$/;
        let propName = 'message';

        if(httpObject[propName] == undefined || !messageRegex.test(httpObject[propName])){
            throw Error(`Invalid request header: Invalid Message`);
        }
    }

    return httpObject;
}
console.log(requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  }
  
  
  ))