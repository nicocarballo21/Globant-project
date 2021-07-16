const { connection } = require("./db");
const {Users, Skills} = require("./db/models")

const setupSeed = async () => {
  console.log("SEED STARTING");

  const skills = [
    { name: 'Diseño (UX/VD)' },
    { name: 'Back-End' },
    { name: 'Front-End' },
    { name: 'Testing' },
    { name: 'QA' },
    { name: 'PHP' },
    { name: 'Python' },
    { name: 'Leadership' },
    { name: 'Full-Stack' },
    { name: 'AWS' },
    { name: '.NET' },
    { name: 'Tech Support' },
    { name: 'Data Analyst' },
    { name: 'SalesForce' },
    { name: 'Costumer Service' },
    { name: 'Executive' },
    { name: 'HR' },
    { name: 'Dev Op' },
    { name: 'Coordinator' },
    { name: 'Facilities' },
    { name: 'Finances' }
  ]

  const skillsPromise = Skills.create(skills)

  const userPromise = Users.create({
    name: "Pepe",
    surname: "Scalan",
    email: "elpepe@email.com",
    password: "12345",
  });

  const userLucy = Users.create({
    name: "Lucy",
    surname: "Loles",
    email: "lucyloles@nosoyxena.com",
    password: "1234",
    position: "UI/UX Lead Designer"
    /* skills: skills -> fijarse como puedo seedear desde acá con relaciones */
  });

  return Promise.all([userPromise, skillsPromise, userLucy]);
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
