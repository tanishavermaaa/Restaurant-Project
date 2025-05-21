const userModel = require("../models/userModel");

module.exports = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user);
    if (!user) {
    return res.status(404).send({
    success: false,
    message: "User not found",
  });
}
    if (user.usertype !== "admin") {
      return res.status(401).send({
        success: false,
        message: "Only Admin Access ",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Un-Authorized access",
      error,
    });
  }
};