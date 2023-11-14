const express = require('express')
const postController = require("../controllers/postController");
const router = express.Router()

router.route('/posts')
    .get(postController.listAllPosts)
    .post(postController.createAPost)

router.route('/posts/:id')
    .get(postController.getPostById)
    .delete(postController.deleteById)
    .put(postController.updateById)

module.exports = router;
