const { BlogPost } = require('../../models');

const router = require('express').Router();

// all of therRoutes in this file are PREFIXED with '/api/blogs'
// GET ALL BLOGS
router.get('/', (req, res) => {
    
})
// GET SINGLE BLOG
router.get('/:id', (req, res) => {

})

// CREATE NEW BLOG
router.post('/', (req, res) => {
    console.log("Incoming Client Data: ", req.body);
    let newPost = {
        title: req.body.title,
        content: req.body.content,
        author: req.session.username
    }
    console.log("Data: ", newPost)
    // add logic to create blog post
    BlogPost.create(newPost)
            .then(data => {
                console.log("DB: ", data.dataValues);

                res.status(201).json(data.dataValues);
            })
            .catch(error => {
                console.log("err: ", error);
                res.status(400).json(error)
            });
});

// UPDATE BLOG
router.put('/:id', (req, res) => {


})

router.delete('/:id', (req, res) => {

});

module.exports = router;
