import mongoose from "mongoose";

const connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database connection established"))
    .catch((e) => console.log(e));
};

export default connect;
