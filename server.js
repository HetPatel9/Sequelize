const app = require("./app");

const { sequelize } = require("./DatabaseConnection");

sequelize.sync().then(() => {
  console.log("database connected");
});

app.listen(3000, () => {
  console.log("app is running...");
});
