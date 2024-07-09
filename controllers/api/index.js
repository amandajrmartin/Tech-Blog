const { User } = require('../../models');

const router = require('express').Router();

// all of therRoutes in this file are PREFIXED with '/api'
router.post('/users', (req, res) => {
    console.log("Incoming Req body: ", req.body);

    // what do we do with this data (?)  --> Create A NEW USER in the Db
  
    User.create(req.body)
        .then(data => {
            console.log("data: ", data.dataValues);
            let newUser = data.dataValues;

            // -->  we are going to save data to the SESSION object
            req.session.save( () => {
                req.session.user_id = newUser.id;
                req.session.username = newUser.username
                req.session.loggedIn = true
                // and what do we RETURN to the incoming request (?)
                res.status(200).json(newUser)
            })
        })
        .catch(error => {
            console.log("Error: ", error)
            res.status(400).json(error)
        });
});
git 

router.post('/users/login', (req, res) => {


})

module.exports = router;
