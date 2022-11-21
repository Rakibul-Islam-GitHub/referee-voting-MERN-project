import express from "express";
import { addReferee } from "../controllers/refereeController.js";

const router = express.Router();

import { signup,signin, updateUser,deleteUser}  from "../controllers/userController.js";


router.post("/add", addReferee);

// // localhost:5000/users/signin POST request
// router.post("/signin", signin);

// // localhost:5000/users/changename put request
// router.put("/:id", updateUser);

// router.delete("/:id",deleteUser);

export default router;
