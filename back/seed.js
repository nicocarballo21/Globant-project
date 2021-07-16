const { connection } = require("./db");
const { Users, Skills } = require("./db/models");

const setupSeed = async () => {

  console.log("SEED STARTING");

  const skillsName = [
    "JavaScript",
    "Diseño (UX/VD)",
    "Back-End",
    "Front-End",
    "Testing",
    "QA",
    "PHP",
    "Python",
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
    "Finances",
    "Analista Funcional",
    "Testing Automatizado",
    "Front-End",
    "Liderazgo",
  ];

  const skillsPromise = Skills.create(
    skillsName.map((skillName) => ({ name: skillName }))
  );

  const userPromise = Users.create({
    name: "Pepe",
    surname: "Scalan",
    email: "elpepe@email.com",
    password: "12345",
    isMentee: true,
    isAdmin: true,
  });

  return Promise.all([userPromise, skillsPromise]);
  
};

try {
  connection.once("open", () =>
    setupSeed().then((doc) => {
      console.log(doc);
      console.log("SEED TERMINADO");
      process.exit(0);
    })
  );
} catch (err) {
  console.log("Somethin went wrong on the seed process", err.message);
  process.exit(1);
}
