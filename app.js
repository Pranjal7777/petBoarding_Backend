const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors({ origin: "*" }))
const connect = require("./src/configs/db")
const { Register, login } = require("./src/controllers/auth.controller")
const userController = require("./src/controllers/user.controller")
const entityController = require("./src/controllers/entity.controller")
const bookingController = require("./src/controllers/booking.controller")
const adminController = require("./src/controllers/admin.Controller")
const { body } = require("express-validator")
app.use(express.json())


app.use("/login",
    login)

app.use("/register",
    body("name").isString().isLength({ min: 5 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
    Register)

app.use("/booking", bookingController)

app.use("/data", entityController)



app.use("/admin", adminController)


app.listen(7070, async () => {
    await connect()
    console.log("listening on port 7070")
})

