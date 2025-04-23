const express = require("express");

const signatureRouter = express.Router();

const {
  getSignatures,
  addSignature
} = require("./signatureRouterMethods");

//*********************************************************************************************************************************//

signatureRouter.get("/get-all", async function (req, res) {
  try {
    const signatures = await getSignatures();
    return res.status(200).json({
      signatures: signatures
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: err.message
    });
  }
});

signatureRouter.post("/add", async function (req, res) {
  try {
    const { name, email, city, state } = req.body;
    if (!name || !email || !city || !state) {
      return res.status(400).json({
        error: "bad request"
      });
    }
    const status = await addSignature(name, email, city, state);
    return res.status(200).json({
      status: status
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: err.message
    });
  }
});

signatureRouter.all("*", async function (_, res) {
  res.status(404).json({
    message: "Error, not found"
  });
});

//*********************************************************************************************************************************//

module.exports = signatureRouter;