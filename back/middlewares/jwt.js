const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    if (!req.headers.authorization) return res.sendStatus(401);
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, "mentee");
    if (data) {
        req.user = data;
        next();
    }
    return res.status(401).send("unauthorized");
} 

module.exports = auth;
