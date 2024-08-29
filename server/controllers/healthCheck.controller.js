function healthCheck(req,res){
     res.status(200).json({"message" : "Health ckeck successful"})
}
 
export {
     healthCheck 
}