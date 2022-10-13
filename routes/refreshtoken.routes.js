import express from "express"
import { getRefreshToken } from "../controllers/getRefreshToken.controllers.js"

const refreshRouter = express.Router()

refreshRouter.get("/", getRefreshToken)

export default refreshRouter