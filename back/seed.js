const { connection } = require("./db");
const { Users, Skills } = require("./db/models");

const setupSeed = async () => {

  console.log("SEED STARTING");

<<<<<<< HEAD
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
=======
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
    { name: 'Finances' },
    { name: 'Scrum' },
    { name: 'Helper' },
    { name: 'Business' },
    { name: 'Security' },
    { name: 'Athentication' },
    { name: 'Services' }
  ]
>>>>>>> 881f462b8bbf50792fc312eb6214239ddec3b929

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

<<<<<<< HEAD
  return Promise.all([userPromise, skillsPromise]);
  
=======
  const userLucy = Users.create({
    name: "Lucy",
    surname: "Loles",
    email: "lucyloles@nosoyxena.com",
    password: "1234",
    position: "UI/UX Lead Designer"
    /* skills: skills -> fijarse como puedo seedear desde acá con relaciones */
  });

  return Promise.all([userPromise, skillsPromise, userLucy]);
>>>>>>> 881f462b8bbf50792fc312eb6214239ddec3b929
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
