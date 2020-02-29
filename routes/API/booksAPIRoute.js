const router =  require("express").Router();
const inquiryController = require("../../controllers/inquiryController.js");


router.route("/")
    .get(inquiryController.findAll)
    .post(inquiryController.create);


router
    .route("/:id")
    .get(inquiryController.findById)
    .put(inquiryController.update)
    .delete(inquiryController.remove);





module.exports = router;