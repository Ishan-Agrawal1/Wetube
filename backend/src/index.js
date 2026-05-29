import dotenv from "dotenv"

import { DB_NAME } from "./constants.js";

import express from "express"
const app = express();

import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB();