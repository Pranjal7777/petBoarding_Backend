const mongoose = require('mongoose')

const entitySchema = new mongoose.Schema({

    name: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    capacity: { type: String, required: true },
    cost: { type: String, required: true },
    verified: { type: String, required: true },
    rating: { type: String, required: true },
    typesofhome: { type: String, required: true },
    areasize: { type: String, required: true },
    noofpets: { type: String, required: true },
    pettype: { type: String, required: true },
    placepetsleep: { type: String, required: true },
    pottybreaks: { type: String, required: true },
    petsize: { type: String, required: true },
    walks: { type: String, required: true },

}, {
    timestamps: true,
    versionKey: false
})


module.exports = mongoose.model("entity", entitySchema)