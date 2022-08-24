import { Router } from "express";
import { CreateAddressController } from "./controllers/CreateAddressController";
import { CreateCityController } from "./controllers/CreateCityController copy";
import { CreateCountryController } from "./controllers/CreateCountryController";
import { CreateStateController } from "./controllers/CreateStateController";
import { CreateUserAddressController } from "./controllers/CreateUserAddressController";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUser = new CreateUserController();
const createAddress = new CreateAddressController();
const createUserAddress = new CreateUserAddressController();
const createCity = new CreateCityController();
const createState = new CreateStateController();
const createCountry = new CreateCountryController();

router.post("/user", createUser.handle);
router.post("/address", createAddress.handle);
router.post("/user-address", createUserAddress.handle);
router.post("/city", createCity.handle);
router.post("/state", createState.handle);
router.post("/country", createCountry.handle);

export { router };
