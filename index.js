import express from "express"
import cors from "cors"
import http from "http"
import path, { dirname } from "path"
import { fileURLToPath } from "url"
import "dotenv/config"

import routes from "./src/routes/index.routes.js"

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(cors()) // need to configure for, only client side
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))
app.use("/", express.static(path.join(__dirname, "../public/index.html")))
app.use("/api/v1", routes)

// configuration for azure app service deployment
app.use(express.static("./client/build"))
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})

const port = process.env.PORT || 5000

app.use("/", (req, res) => {
  res.send("This is server!")
})

const server = http.createServer(app)

server.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
})