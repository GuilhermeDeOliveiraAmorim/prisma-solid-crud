import { Router } from "express";
import { CreateAddressController } from "./controllers/CreateAddressController";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUser = new CreateUserController();
const createAddress = new CreateAddressController();

router.post("/user", createUser.handle);
router.post("/address", createAddress.handle);

export { router };
