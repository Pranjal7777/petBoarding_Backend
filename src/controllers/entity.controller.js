const express = require("express")
const crudController = require('./crud.controller')
const Entity = require("../models/entity.model")
const router = express.Router()

router.get("", crudController(Entity).getAll)
router.get("/:id", crudController(Entity).getOne)

router.post("", crudController(Entity).post)
router.delete("/:id", crudController(Entity).Delete)


// router.get("/:id", async (req, res) => {

//     try {
//         const find = await Entity.findById(req.params.id).lean().exec()
//         return res.send(find)
//     } catch (error) {
//         return res.send(error)
//     }

// })





module.exports = router