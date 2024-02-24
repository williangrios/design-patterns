interface ServerRequest{
    handle(request: any): void
}

class BaseServer implements ServerRequest{
    public handle(request: any): void {
        console.log('Handling request:', request)
    }
}

abstract class ServerRequestDecorator implements ServerRequest{
    constructor(protected serverRequest: ServerRequest){

    }

    abstract handle(request: any): void 
}

class LoggingMiddleware extends ServerRequestDecorator{
    public handle(request: any): void {
        console.log('Logging request: ', request)
        // we have access to the base server request
        this.serverRequest.handle(request)
    }
}

class AuthMiddleware extends ServerRequestDecorator{
    public handle(request: any): void {
        if (request.isAuthenticated){
            console.log('Request is authenticated ')
            // we have access to the base server request
            this.serverRequest.handle(request)
        } else {
            console.log('Unauthorized access')
        }
    }
}

// client code
const request ={
    isAuthenticated: true,
    body: 'Hello world'
}

let server1: ServerRequest = new BaseServer()
server1.handle(request)

let server: ServerRequest = new BaseServer()
server = new LoggingMiddleware(server)
server.handle(request)

let server2: ServerRequest = new BaseServer()
server2 = new LoggingMiddleware(server)
server2 = new AuthMiddleware(server)
server2.handle(request)


