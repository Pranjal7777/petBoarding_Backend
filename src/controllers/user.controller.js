const express = require("express")
const Booking = "../models/booking.model.js"
const crudController = require("./crud.controller")
const User = require("../models/user.mode")
const router = express.Router()

router.post("/booking", crudController(Booking).post)
router.post("", crudController(User).post)
router.get("", crudController(User).getAll)
router.get("/:id", crudController(User).getOne)
router.patch("/:id", crudController(User).patch)
router.delete(":id", crudController(User).Delete)









module.exports = router



