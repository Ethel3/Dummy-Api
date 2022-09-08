import express from "express";
import { getClass } from "../controllers/class.controllers.js";

const ClassRoute = express.Router();

// Get all students
ClassRoute.get("/", getClass)


export default ClassRoute