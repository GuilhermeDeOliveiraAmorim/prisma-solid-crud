import { Router } from "express";
import { CreateAddressController } from "./controllers/CreateAddressController";
import { CreateUserAddressController } from "./controllers/CreateUserAddressController";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUser = new CreateUserController();
const createAddress = new CreateAddressController();
const createUserAddress = new CreateUserAddressController();

router.post("/user", createUser.handle);
router.post("/address", createAddress.handle);
router.post("/user-address", createUserAddress.handle);

export { router };
