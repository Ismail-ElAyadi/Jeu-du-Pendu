const guessWord = [
    "D",
    "E",
    "V",
    "I",
    "N",
    "E",
    "R"
];

const answerWord = [
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_"
]

let verif = 0

function guessLetter() {

    // Utilisateur propose une lettre.
    let guessUser = prompt("Proposez une lettre : ")


    // Vérifie chaque element (index) et regarde si c'est = a la proposition

    for (let i = 0; i < guessWord.length; i++) {

        if (guessWord[i] == guessUser) {
            //si c'est le cas , remplacer la valeur a l'index I par la proposition
            answerWord[i] = guessUser

            // incrementer une valeur pour vérifier
            verif++
            console.log("Verif " + verif)

        } else if (!guessWord.includes(guessUser) && i == guessWord.length - 1) {
            alert("Cette lettre n'est pas dans le mot")
            guessLetter()



        }
    }

    if (verif == guessWord.length) {
        alert('Bien joué! ')
    } else {

        guessLetter() // nous empeche d'incrementer

    }

    console.table(answerWord)


}
guessLetter()