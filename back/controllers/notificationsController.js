const jwt = require("jsonwebtoken");

const {
  buildNotification,
  pullFromReceptor,
} = require("../services/notificationsServices");

module.exports = {
  sendNotification: async (req, res, next) => {
    try {
      const { receptor, type } = req.body;
      const emisor = req.user.id;
      if (!receptor || !emisor || !type)
        return res.status(400).send("Bad request: invalid body");
      await buildNotification({ emisor, receptor, type });
      res.sendStatus(201);
    } catch (err) {
      next(err);
    }
  },

  deleteNotification: async (req, res, next) => {
    try {
      const user = await pullFromReceptor(
        req.user.id,
        req.params.notificationId
      );
      res.status(200).json({ ...user._doc, password: null });
    } catch (err) {
      next(err);
    }
  },
};
