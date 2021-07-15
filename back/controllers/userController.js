const { Users } = require("../db/models")
const jwt = require("jsonwebtoken")

module.exports = {
    userRegister: function(req, res) {
        Users.
            create(req.body)
            .then(user => {
                const token = jwt.sign({id: user.id}, "mentee")
                res.status(200).json({ user, token })
            })
            .catch(() => res.send("User exists"))
    },
    userLogin: function(req, res) {
        Users.
            findOne({ email: req.body.email }).
            populate({
                path: "skills",
                populate: { path: "name" },
            })
            .then((user) => {
                if (!user) return res.status(400).send("user does not exists");
                user.comparePassword(req.body.password)
                    .then(password => {
                        if (!password) return res.status(401).send("Password Incorrect");
                        const token = jwt.sign({id: user.id}, "mentee");
                        return res.status(200).json({ token, user });
                    })
            })
    }
}
