import Server from "./clases/server";
import router from "./routes/router";
import { SERVER_PORT } from './global/environment';
import bodyParser from 'body-parser';
import cors from 'cors';

 const server = Server.instance;

 //Body Parser
 server.app.use( bodyParser.urlencoded({extended:true}) );
 server.app.use( bodyParser.json() );


//CORS
server.app.use( cors({ origin:true, credentials: true }));//permite a cualquier persona llamar los servicios

 //Rutas de Servicio
 server.app.use('/', router)

server.start( ()=>{
    console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`);
});
