const { connection } = require("./db");
const {Users, Skills} = require("./db/models")

const setupSeed = async () => {
  console.log("SEED STARTING");

  const skills = [
    { name: "Liderazgo" },
    { name: "JavaScript" },
    { name: "Front-End" },
    { name: "Diseño (UX/VD)" },
    { name: "Testing Automatizado" },
    { name: "Analista Funcional" },
  ];

  const skillsPromise = Skills.create(skills)

  const userPromise = Users.create({
    name: "Pepe",
    surname: "Scalan",
    email: "elpepe@email.com",
    password: "12345",
  });

  return Promise.all([userPromise, skillsPromise]);
};

try {
  connection.once("open", () =>
    setupSeed().then((doc) => {
      console.log("SOY EL SEED", doc)
      process.exit(0);
    })
  );
} catch (err) {
  console.log("Somethin went wrong on the seed process", err.message);
  process.exit(1);
}
