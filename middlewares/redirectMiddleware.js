

module.exports = (req, res, next) => {
  
    if(req.sessions.userID){
        return res.redirect('/')
        
    }

    next();
    

};
