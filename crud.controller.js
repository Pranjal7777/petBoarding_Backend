// const { model } = require("mongoose")
// const { post } = require("./user.controller")


// const post = (model) => async (req,res)=> {

//     try {
//         const item = await model.create(req.body)

//         return res.send(item)

//     } catch (error) {
//         console.log(error.message)
//     }

    
// }

// const getAll = (model) => async (req,res) => {

//     try {
//         const items = await model.create(req.body)

//         return res.send(items)

//     } catch (error) {
//         console.log(error.message)
//     }
// }


// const getOne = (model) => async (req,res)=>{

//     try {
//         const item = await model.findById(req.params.id).lean().exec()


//         return res.send(item)

//     } catch (error) {
//         console.log(error.message)
//     }

// }


// const updateOne = (model)=> async (req,res)=> {

//     try {
//         const item = await model.findByIdAndUpdate(req.params.id,req.body, {
//             new:true
//         } )


//         return res.send(item)

//     } catch (error) {
//         console.log(error.message)
//     }


// }


// const deleteOne = (model) => async (req,res) =>{

//     try {
//         const item = await model.findByIdAndDelete(req.params.id)


//         return res.send(item)

//     } catch (error) {
//         console.log(error.message)
//     }

// }

// module.exports = (model) =>{

//     return {
//         post: post(model),
//         getAll: getAll(model),
//         getOne: getOne(model),
//         updateOne: updateOne(model),
//         deleteOne: deleteOne(model)
//     }
// }