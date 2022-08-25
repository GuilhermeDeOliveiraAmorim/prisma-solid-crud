import { Router } from "express";
import { CreateAddressController } from "./controllers/CreateAddressController";
import { CreateCityController } from "./controllers/CreateCityController copy";
import { CreateCountryController } from "./controllers/CreateCountryController";
import { CreateStateController } from "./controllers/CreateStateController";
import { CreateUserAddressController } from "./controllers/CreateUserAddressController";
import { CreateUserController } from "./controllers/CreateUserController";
import { FindAllUsersController } from "./controllers/FindAllUsersController";
import { FindCitiesController } from "./controllers/FindCitiesController";
import { FindCityController } from "./controllers/FindCityController";
import { FindUserAddressController } from "./controllers/FindUserAddressController";
import { FindUserController } from "./controllers/FindUserController";

const router = Router();

const createUser = new CreateUserController();
const createAddress = new CreateAddressController();
const createUserAddress = new CreateUserAddressController();
const createCity = new CreateCityController();
const createState = new CreateStateController();
const createCountry = new CreateCountryController();
const findUser = new FindUserController();
const findAllUsers = new FindAllUsersController();
const findUserAddress = new FindUserAddressController();
const findCities = new FindCitiesController();
const findCity = new FindCityController();

router.post("/user", createUser.handle);
router.post("/address", createAddress.handle);
router.post("/user-address", createUserAddress.handle);
router.post("/city", createCity.handle);
router.post("/state", createState.handle);
router.post("/country", createCountry.handle);
router.get("/user/:id", findUser.handle);
router.get("/users", findAllUsers.handle);
router.get("/get-user-address/:id", findUserAddress.handle);
router.get("/cities", findCities.handle);
router.get("/city/:search", findCity.handle);

export { router };
