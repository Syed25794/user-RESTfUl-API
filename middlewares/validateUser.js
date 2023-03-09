function validateUser(req, res, next) {
    const { firstName, lastName, level , email, password } = req.body;
    if (!firstName || !email || !password || !lastName || !level ) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    // If all required fields are present, continue to the next middleware function
    next();
}

module.exports = validateUser;