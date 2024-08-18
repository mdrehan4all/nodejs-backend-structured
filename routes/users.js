const express = require("express");
const router = express.Router();
const app = express();
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

app.use(express.json());

router.get("/", auth, userController.getUser);
router.post("/login", userController.userLogin);
router.post("/signup", userController.userSignup);
router.post("/info", auth, userController.userInfo);
router.get("/list", auth, userController.getAllUsers);
router.get("/:id", auth, userController.getUserById);
router.delete("/:id", auth, userController.userDelete);

module.exports = router;
