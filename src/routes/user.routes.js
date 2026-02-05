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
  "/users",
  validate(userSchema),
  userController.createUserController,
);
router.post(
  "/users/login",
  userController.loginUserController,
);

router.use(authMiddleware);
router.get("/users", userController.findAllUsersController);
router.get("/users/:id", validadeUserId, userController.findUserByIdController);
router.patch("/users/:id", validadeUserId, userController.updateUserController);
router.delete(
  "/users/:id",
  validadeUserId,
  userController.deleteUserController,
);

export default router;
