import express from "express";


const logoutRouter = express.Router()
logoutRouter.route("/").get(logout)

export default logoutRouter;