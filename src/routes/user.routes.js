import { Router } from "express";
import userController from "../controller/user.controllers.js";
import {
  validadeUserId,
  validate,
} from "../middlewares/validation.middlewares.js";
import { userSchema } from "../schema/user.schema.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post(
  "/",
  validate(userSchema),
  userController.createUserController,
);
router.post(
  "/login",
  userController.loginUserController,
);

router.use(authMiddleware);
router.get("/", userController.findAllUsersController);
router.get("/:id", validadeUserId, userController.findUserByIdController);
router.patch("/:id", validadeUserId, userController.updateUserController);
router.delete(
  "/:id",
  validadeUserId,
  userController.deleteUserController,
);

export default router;
