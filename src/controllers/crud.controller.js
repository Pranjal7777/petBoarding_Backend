const post = (model) => async (req, res) => {
    console.log(req.body)
    try {

        const item = await model.create(req.body)
        return res.status(201).send(item)

    } catch (error) {
        return res.status(500).send(error)
    }

}

const getAll = (model) => async (req, res) => {

    try {

        const item = await model.find().lean().exec()
        return res.status(200).send(item)

    } catch (error) {
        return res.status(500).send(error)
    }

}

const getOne = (model) => async (req, res) => {

    try {

        const item = await model.findById(req.params.id).lean().exec()
        return res.status(200).send(item)

    } catch (error) {
        return res.status(500).send(error)
    }

}


const patch = (model) => async (req, res) => {

    try {

        const item = await model.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec()
        return res.status(200).send(item)

    } catch (error) {
        return res.status(500).send(error)
    }

}

const Delete = (model) => async (req, res) => {

    try {

        const item = await model.findByIdAndDelete(req.params.id)
        return res.status(200).send(item)

    } catch (error) {
        return res.status(500).send(error)
    }

}


module.exports = (model) => {
    return {

        post: post(model),
        getAll: getAll(model),
        getOne: getOne(model),
        patch: patch(model),
        Delete: Delete(model),


    }
}