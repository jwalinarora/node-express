const express=require("express");
const bodyParser=require("body-parser");
const promoRouter=express.Router();
promoRouter.use(bodyParser.json());
promoRouter.route("/")
.all((req,res,next)=>{
	res.status=200;
	res.setHeader('Content-Type',"text/plain");
	next();
})
.get((req,res,next)=>{
	res.end("Will send all the promotions to you!");
})
.put((req,res,next)=>{
	res.status=403
	res.end("Put operation not supported on /promotions");
})
.post((req,res,next)=>{
	res.end("Will add the promotion: "+req.body.name+' with details: '+req.body.description);
})
.delete((req,res,next)=>{
	res.end("Deleting all promotions!	");
});
promoRouter.route("/:promoId")
.all((req,res,next)=>{
	res.status=200;
	res.setHeader('Content-Type',"text/plain");
	next();
})
.get((req,res,next)=>{
	res.end("Will send all details of "+req.params.dishId);
})
.put((req,res,next)=>{
	res.end("Updating the promotion: "+req.params.promoId+'\n'+'Will update promotion: '+req.body.name+' with details '+req.body.description);
})
.post((req,res,next)=>{
	res.statusCode=403;
	res.end("POST operation not supported on /promotions/ "+req.params.dishId);
})
.delete((req,res,next)=>{
	res.end("Deleting promotion!	");
});
module.exports=promoRouter;