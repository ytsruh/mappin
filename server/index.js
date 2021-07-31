const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");

app.use(express.json());
app.use(cors());

try {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("MongoDB connected!");
} catch (err) {
  console.log(err);
}

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
