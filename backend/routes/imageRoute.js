const router = require("express").Router();
const imageController = require("../controllers/imageController");
const { authentication, authorization } = require("../middlewares/auth");
const multer = require("../libs/multer");

router.get("/", imageController.findAll);
router.get("/:id", imageController.findOne);
router.use(authentication, authorization);
router.post("/", multer, imageController.create);
router.put("/:id", imageController.update);
router.delete("/:id",imageController.destroy)

module.exports = router;
