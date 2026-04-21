export async function isLoggedIn (req, res, next) {
    if (req.session.user) {
        return next();
    } else {
        return res.status(401).send({ errorMessage: "You are not authorized. Log in." });
    }
}

export async function isAdmin(req, res, next) {
    // Check if user is logged in with a session and if they are admin
    // In the case that they are not, they will get an error
    if (req.session.user.isAdmin === 1) {
        return next();
    } else {
        return res.status(403).send({ errorMessage: "You don't have the right, O, you don't have the right." });
    }
}