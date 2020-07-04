import {serve, Server, ServerRequest} from 'https://deno.land/std@0.60.0/http/server.ts';

const server: Server = serve({port: 3333, hostname: 'localhost'});
console.log('Server started on http://localhost:3333');

for await(const req: ServerRequest of server){
    if(req.url === '/'){
        req.respond({body: 'Hello, world!'});
    }
    if(req.url === '/users'){
        req.respond({body: JSON.stringify({name: 'Ilgsson', age: 25})});
    }
    
}