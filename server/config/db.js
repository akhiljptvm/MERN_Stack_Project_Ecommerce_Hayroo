const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://aneesha:Dreamer@ictakfiles.4ubv7.mongodb.net/BUYME?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
