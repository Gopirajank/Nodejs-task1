const asyncHandler =require("express-async-handler");
const getContacts = asyncHandler (async(req,res) => {
    res.status(200).json({message:require("../mocks/mocks.json")});
});


const createContact = asyncHandler (async(req,res) => {
    console.log("the request body is:",req.body);
    const {name,email,mob} =req.body;
    if(!name ||!email||!mob){
        res.status(400);
        throw new Error("emty");
    }
    res.status(201).json({message:"creacte get"});
});

const getContact = asyncHandler (async (req,res) => {
    res.status(203).json({message:` get by id ${req.params.id}`});
});

const putContact = asyncHandler (async(req,res) => {
    res.status(300).json({message:`update get ${req.params.id}`});
});
const deleteContact = asyncHandler (async(req,res) => {
    res.status(400).json({message:`delete get ${req.params.id}`});
});
module.exports ={ getContacts,createContact,getContact,putContact,deleteContact };