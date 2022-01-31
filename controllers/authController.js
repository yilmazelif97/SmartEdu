const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);

  try {
    res.status(201).json({
      status: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "User is not successed",
      error,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //kullanıcı var mı kontrolü
    const user =await User.findOne({ email })
      //kulllanıcı varsa girilen bilgiler uyuşuyor mu kontrolü
      /*if (user) {
        bcrypt.compare(password, user.password, (err, same) => {
          if (same) {
            //session
            req.session.userID = user._id;
            console.log("login oldu");
            console.log(req.session.userID);
            
          }
        });
      
      */
    if(user){
      const same =bcrypt.compare(password, user.password)
      if(same){
        req.session.userID = user._id;
        console.log("login oldu");
        console.log(req.session.userID);
        res.redirect('/')

      }
     
    }
   
    
      
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "User is not successed",
    });
    return;
  }
};
