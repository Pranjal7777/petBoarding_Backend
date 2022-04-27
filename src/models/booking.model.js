const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    entity_id: { type: mongoose.Schema.Types.ObjectId, ref: "entity", required: true },
    booking_status: { type: "String", default: "Pending" },
    type_of_pet: { type: String, require: true },
    booking_date: { type: String, require: true },
    end_date: { type: String, require: true },

}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("booking", bookingSchema)