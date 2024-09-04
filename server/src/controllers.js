const Subscription = require("./models.js");
const { validationResult } = require("express-validator");

exports.subscribeUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email } = req.body;

  try {
    let subscription = await Subscription.findOne({ email });

    if (subscription) {
      return res.status(400).json({ msg: "Email is already subscribed" });
    }

    subscription = new Subscription({
      email
    });

    await subscription.save();
    res.json({ msg: "Successfully subscribed!" });
  } catch (err) {
      console.error("Subscription error:", err);
      res.status(500).json({ msg: "Server error", error: err.message });
  }

};
