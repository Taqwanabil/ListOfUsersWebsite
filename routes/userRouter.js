
//const router = reuire ('express).Router();   mini app export at end 

const express = require('express')

const userModel = require('../models/user');

const router = express.Router();

router.get(['/', '/AddNew'], (req, res) => {

    res.render('pages/form.ejs');
})
router.get('/:id/edit', (req, res) => {

    userModel.findById(req.params.id, function (err, users) {
        if (err) {
            console.log(err);
        }
        //console.log(users)
        res.render("pages/EditForm.ejs", { users });

    });

})
router.post(['/', '/AddNew'], (req, res) => {

    const user = new userModel({
        name: req.body.name,
        age: req.body.age,
        // email: req.body.email,

    });

    user.save(err => {
        if (err) return res.send(err);
        userModel.find((err, users) => {
            res.render('pages/users', {
                users: users
            })
        })
    })
})

router.get('/:id/delete', (req, res) => {

    userModel.findByIdAndRemove((req.params.id), (err) => {
        if (err) {
            console.log(err);
        }
        userModel.find((err, users) => {
            res.render('pages/users', {
                users: users
            })
        })
    })
    //res.redirect('/users/')
})

router.post('/:id/edit', (req, res) => {

    userModel.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err) {
        if (err) {
            console.log(err);
        }
        userModel.find((err, users) => {
            res.render('pages/users', {
                users: users
            })
        })
    });
})
router.get('/:id/UserData', (req, res) => {

    userModel.findById(req.params.id, function (err, result) {
        if (err) {
            console.log(err);
        }
        res.send(result)
    })
})
function redirectToList() {
    window.location.href = "http://localhost:9000/users";
}
module.exports = router;


