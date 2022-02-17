module.exports =(roles)=>{
    //önce rol kontrolü o yüzden param oalrak aldık
    return (req,res,next)=>{
        const userRole = req.body.role; //selectin name i bu role ismi ordna

        if(roles.includes(userRole)){
            next();
        }
        else{
            return res.status(401).send('yetki yok');
        }


    }
}