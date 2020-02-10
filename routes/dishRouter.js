const express=require('express');
const bodyParser=require('body-parser');
const dishRouter=express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/')
.all((req,res,next)=>{
	res.statusCode=200;
	res.setHeader("Content-Type",'text/plain');
	next();
})
.get((req,res,next)=>{
	res.end("Will send all dishes to you");
})
.post((req,res,next)=>{
	res.end("Will add the dishes later "+req.body.name+' with details: '+req.body.description);
})
.put((req,res,next)=>{
	res.statusCode=403;
	res.end("PUT operation not supported on /dishes");
})
.delete((req,res,next)=>{
	//re.statusCode=403;
	res.end("Deleting all dishes!	");
});
dishRouter.route('/:dishId')
.get((req,res,next)=>{
	res.end("Will send all details of "+req.params.dishId);
})
.post((req,res,next)=>{
	//res.end("Will add the dishes later"+req.body.name+' with details: '+req.body.description);
	res.statusCode=403;
	res.end("POST operation not supported on /dishes/ "+req.params.dishId);
})
.put((req,res,next)=>{
	//re.statusCode=403;
	res.write("Updating the dish: "+req.params.dishId);
	res.end("Will update dish: "+req.body.name+" with details "+req.body.description);
})
.delete((req,res,next)=>{
	//re.statusCode=403;
	res.end("Deleting dish!	");
})	
module.exports=dishRouter;