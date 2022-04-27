const express = require("express")

const router = express.Router()
const Booking = require("../models/booking.model")
const crudController = require("../controllers/crud.controller")

router.get("", async (req, res) => {

    try {

        const booking = await Booking.find().populate({ path: "user_id" }).populate({ path: "entity_id" }).lean().exec()
        return res.status(200).send(booking)


    } catch (error) {

        return res.status(500).send(error)

    }

})



module.exports = router