const { connection } = require("./db");
const User = require("./db/models/User");

const setupSeed = async () => {
  console.log("SEED STARTING");

  const rafita = User.create({
    name: "Pepe",
    surname: "Villa",
    email: "elpepe@email.com",
    password: "12345",
  });

  return rafita;
};      

try {
  connection.once("open", () =>
    setupSeed().then((doc) => {
      process.exit(0);
    })
  );
} catch (err) {
  console.log("Somethin went wrong on the seed process", err.message);
  process.exit(1);
}
