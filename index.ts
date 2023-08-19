import express from "express"
import { Application } from "express"
import { db } from "./Config/db"
import { mainApp } from "./mainApp"

const app: Application = express()
const port: number = 2000

mainApp(app)
const server = app.listen( port,() => {
    db()
    console.log("server is listening")
})

process.on("uncaughtException", (error: Error)=> {
    console.log("uncaughtException")
    console.log("uncaughtException", error)

    process.exit(1)
})

process.on("unhandledRejection", (Reason: any) => {
    console.log("unhandledRejection")
    console.log("unhandledRejection: ", Reason)

    server.close(()=> {
        process.exit(1)
    })
})