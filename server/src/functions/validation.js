function login(req,res,next){
    let{uid,pw}=req.body
    let email=/\w+@(gmail|yahoo|outlook|hotmail)\.(com|in)$/
    let valid=true;
    let response={}

    if(!email.test(uid))
    {
       valid=false
       response.success=-1
       response.uid='invalid email' 
    }
    if((pw.length<4)||(pw.search(/\d/)<0))
    {
        valid=false;
        response.success=-1
        response.pw='password should have 4 or more char and alphanumberic '
 
    }

    if(valid)
     next()
    else
      return  res.json(response)  

}


module.exports={
    login
}