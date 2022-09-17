import express from "express";
import logOut from "../controllers/logout.controllers.js";


const logoutRouter = express.Router()
logoutRouter.route("/").get(logout)

export default logoutRouter;