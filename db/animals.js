const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

(async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log("DB connection success");
  } catch (error) {
    console.log("Connection to db failed", error);
  }
})();


module.exports = mongoose.connection;