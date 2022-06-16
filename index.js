const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const cors = require('cors')

const URL = "mongodb+srv://pavi:pavi@cluster0.qpbvc.mongodb.net/netflix?retryWrites=true&w=majority"

dotenv.config();
app.use(cors({
  origin:"*"
}))

 mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

 app.listen(process.env.PORT || 8800, () => {
  console.log("Backend server is running!");
});