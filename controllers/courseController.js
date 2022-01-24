const Course = require("../models/Course");

exports.createCourse = async (req, res) => {
  const course = await Course.create(req.body);

  try {
    res.status(201).json({
      status: true,
      course,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Create is not successed",
      error
    });
  }
};

exports.getAllCourse= async (req,res)=>{
    const course = await Course.find()

    try {
        res.status(200).render("courses",{
            course,
            page_name:"courses"
        }) //ilk parametre render edeceği sayfa adı, ikinci parametrede de o sayfaya gönderilcek veriler ekleniyor.

        //json format
        /*res.status(201).json({
          status: true,
          course,
        });*/
      } catch (error) {
        res.status(400).json({
          status: false,
          message: "Create is not successed",
          error
        });
      }
}
