const Course = require("../models/Course");

const Category = require('../models/Category')

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
    
    try {

      const categorySlug = req.query.categories;
      const category = await Category.findOne({slug:categorySlug})

      let filter ={}

      if(categorySlug){
        filter = {
          category:category._id
        }
      }


      const course = await Course.find(filter)

      const categories = await Category.find()

        res.status(200).render("courses",{
            course,
            categories,
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

exports.getSingleCourse= async (req,res)=>{
    const course = await Course.findOne({slug: req.params.slug});

    try {
        res.status(200).render("coursesingle",{
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
          error
        });
      }
}
