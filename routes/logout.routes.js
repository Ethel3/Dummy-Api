import express from "express";
import logout from "../controllers/logout.controllers.js";


const logoutRouter = express.Router()
logoutRouter.route("/").get(logout)

export default logoutRouter;