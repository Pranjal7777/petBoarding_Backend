const express = require("express")

const router = express.Router()
const Booking = require("../models/booking.model")
const crudController = require("../controllers/crud.controller")

router.post("", crudController(Booking).post)
// router.get("", crudController(Booking).getAll)

router.patch("/:id", crudController(Booking).patch)

router.get("", async (req, res) => {

    try {

        const booking = await Booking.find(req.params.id).lean().exec()
        return res.status(200).send(booking)


    } catch (error) {

        return res.status(500).send(error)

    }

})



router.get("/:user_id", async (req, res) => {

    try {

        const booking = await Booking.find({ user_id: req.params.user_id }).populate({ path: "user_id" }).populate({ path: "entity_id" }).lean().exec()
        return res.status(200).send(booking)


    } catch (error) {

        return res.status(500).send(error)

    }

})


// router.get("/admin", async (req, res) => {

//     try {

//         // const booking = await Booking.find().populate({ path: "user_id" }).populate({ path: "entity_id" }).lean().exec()
//         return res.status(200).send("booking")


//     } catch (error) {

//         return res.status(500).send(error)

//     }

// })




module.exports = router