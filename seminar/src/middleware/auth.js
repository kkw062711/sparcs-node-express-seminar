const authMiddleware = (req, res, next) => {
    if (req.body.credential.id === "USERNAME" && req.body.credential.pw === "PASSWORD") {
        console.log("[AUTH-MIDDLEWARE] Authorized User");
        next();
    }
    else {
        console.log(process.env.API_KEY)
        console.log("[AUTH-MIDDLEWARE] Not Authorized User");
        res.status(401).json({ error: "Not Authorized" });
    }
}

module.exports = authMiddleware;