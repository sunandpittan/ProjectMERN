const mongoose = require("mongoose");

const connection = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://sunandpittan:123Mongo@sunand.kjxcken.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database is running");
  } catch (err) {
    console.log(`Error: ${err}`);
    process.exit();
  }
};

module.exports = connection;
