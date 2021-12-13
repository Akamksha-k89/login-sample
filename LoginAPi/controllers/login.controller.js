exports.signup = async(req,res)=>{
    if(!req.body.email || !req.body.password)
    {
       return res.status(400).send({
            message: "email or password cannot be empty"
          });
    }
    if(!(validateEmail(req.body.email)))
    {
        return res.status(400).send({
            message: "Email is not valid"
          });
    }
    if(!(req.body.password.toString().length >5 && req.body.password.toString().length <=8))
    {
       return res.status(400).send({
            message: "Password should be of 5 to 8 characters only"
          });
    }

    return res.status(200).send({message:"Login successful!"});
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };