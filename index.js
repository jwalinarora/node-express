const express=require('express');
const http=require('http');
const hostname='localhost';
const port='3000';
const morgan=require('morgan');
const bodyParser=require('body-parser');
const dishRouter=require('./routes/dishRouter');
const promoRouter=require('./routes/promoRouter');
const leaderRouter=require('./routes/leaderRouter');
const app=express();
// whenever you wantto use a middleware with express,use app.use(your_middleware) 
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);
// app.all is used to execute any method first and then passed on
app.use(express.static(__dirname+'/public')); //used to check static files in the root directory of project i.e __dirname appended with '/public' 
app.use((req,res,next)=>{     //to setup server for default or unhandled cases
	//console.log(req.headers);
	res.statusCode=200;
	res.setHeader('Content-Type','text/html');
	res.end('<html><body><h1>This is an express server</h1></body></html>');
})
const server=http.createServer(app);  //creates server
server.listen(port,hostname,()=>{
	console.log(`Sever running at http://${hostname}:${port}`);
})