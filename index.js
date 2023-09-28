const greetings = ["Bonjour", "Salut", "Hey"];
const subjects = ["le monde", "ami", "tout le monde"];
const verbs = ["passe une bonne journee", "reste positif", "garde le sourire"];

// <<<<<<< creationArray
const greetings = ["Bonjour", "Salut", "Hey"];
const subjects = ["le monde", "ami", "tout le monde"];
const verbs = ["passe une bonne journee", "reste positif", "garde le sourire"];
// =======
const randomGreetingIndex = Math.floor(Math.random() * greetings.length);
const randomSubjectIndex = Math.floor(Math.random() * subjects.length);
const randomVerbIndex = Math.floor(Math.random() * verbs.length);

const message = `${greetings[randomGreetingIndex]}, ${subjects[randomSubjectIndex]}! ${verbs[randomVerbIndex]}`;


console.log(message);
// >>>>>>> develop
