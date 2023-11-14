const Comments = require("../models/postModel");

exports.listAllPosts = async (req, res) => {
    try {
        const posts = await Comments.find({});
        res.status(200);
        res.json(posts);

    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: "Erreur serveur."})
    }
}

exports.getPostById = async (req, res) => {

    try {
        const post = await Comments.findById(req.params.id).exec();
        res.status(200);
        res.json(post);

    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: "Erreur serveur."})
    }
}

exports.deleteById = async (req, res) => {

    try {
        await Comments.deleteOne({_id: req.params.id}).exec();
        res.status(200);
        res.json({"message": `The comment is deleted successfully`});

    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: "Erreur serveur."})
    }
}


exports.createAPost = async (req, res) => {
    try {
        const newPost = new Comments(req.body);
        const post = await newPost.save();
        res.status(201);
        res.json(post);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: "Erreur serveur."})
    }
}

exports.updateById = async (req, res) => {
    try {

        const post = await Comments.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200);
        res.json(post);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: "Erreur serveur."})
    }
}
