const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const appRouter = express();

appRouter.use(cors());
appRouter.use(express.json());

const signatureRouter = require("./routes/signatureRouter.js");

const LISTEN_PORT = process.env.LISTEN_PORT;

if (!LISTEN_PORT) {
  console.error("FATAL ERROR: env variable LISTEN_PORT is undefined, exiting");
  process.exit(1);
}

//*********************************************************************************************************************************//

appRouter.use("/signature", signatureRouter);

appRouter.all("*", async function (_, res) {
  res.status(404).json({
    message: "Error, not found"
  });
});

//*********************************************************************************************************************************//

appRouter.listen(LISTEN_PORT, () => {
  console.log(`listening on port ${LISTEN_PORT}`);
});
