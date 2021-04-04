require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", require("./routes/useRouter"));

const uri = process.env.MONGO_URL;
mongoose.connect(
  uri,
  {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connect Mongo successful");
  }
);

app.get("/", (req, res) => {
  res.json({ a: "hihi" });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
