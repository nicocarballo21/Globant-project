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
    isMentee: true,
    isAdmin: true,
    skills: [
      "Diseño (UX/VD)",
      "Back-End",
      "Front-End",
      "Testing",
      "QA",
      "PHP",
      "Python",
      "Leadership",
      "Full-Stack",
      "AWS",
      ".NET",
      "Tech Support",
      "Data Analyst",
      "SalesForce",
      "Costumer Service",
      "Executive",
      "HR",
      "Dev Op",
      "Coordinator",
      "Facilities",
      "Finances"
    ]
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
