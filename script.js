let alexandrieCramee = ["vermine", "grizzli", "deviner", "pikachu"]
let randoMot = Math.floor(Math.random() * alexandrieCramee.length)

let motDefini = alexandrieCramee[randoMot]

//split renvoit directement un tableau
const lettresSecretes = motDefini.split("");

const lettresDecouvertes = []
// boucle pour push le nombre de tirets pour les tirets a deviner
for (x = 0; x < motDefini.length; x++) {
  //push le tiret dans le tableau
  lettresDecouvertes.push("_")

};

let compteurDeLettres = 0;


let celineErrone = []

let limiteRoulette = 5
console.log(limiteRoulette)

document.getElementById("letters").innerText = lettresDecouvertes.join(" ")


// Press ENTER pour déclencher le click
let input = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("run").click();

  }
});


function guessLetter() {
  // Utilisateur propose une lettre.
  let propositionJoueur = input.value;
  input.value = "";
  const lettresSecretesTotales = lettresSecretes.length;



  // Vérifie chaque element (index) et regarde si c'est = À la proposition

  for (let i = 0; i < lettresSecretesTotales; i++) {
    if (lettresSecretes[i] == propositionJoueur) {

      //si c'est le cas , verifier si la lettre est déja inscrite .
      if (lettresDecouvertes[i] != propositionJoueur) {
        lettresDecouvertes[i] = propositionJoueur;
        compteurDeLettres++;

      }
    }

  }

  // si la proposition du joueur n'est pas dans le tableau erreur, et si il n'est pas dans le bon tableau
  if (!celineErrone.includes(propositionJoueur) && !lettresSecretes.includes(propositionJoueur)) {

    // push dans tableau céline et le réécris.
    celineErrone.push(propositionJoueur)
    document.getElementById("errone").textContent = celineErrone.join()

    //on décrémente le nombre d'essai
    limiteRoulette--
    document.getElementById("essai").innerText = `Vous avez encore ${limiteRoulette} chances`

    // compteur d'essai .
    if (limiteRoulette == 0) {
      document.getElementById("essai").innerText = "Perdu couillon";

      //On désactive l'input : touche pas pti con
      document.getElementById("myInput").disabled = true;
      return document.getElementById("letters").innerText = lettresSecretes.join(" ")


    }

  }



  // pour actualisé entre chaque nouvelles lettres
  if (compteurDeLettres < lettresSecretesTotales) {
    return document.getElementById("letters").innerText = lettresDecouvertes.join(" ");
  }


  // pour vérifier si la valeur incrémentée a atteint la valeur max du tableau
  if (compteurDeLettres == lettresSecretesTotales) {
    document.getElementById("letters").innerText = lettresDecouvertes.join(" ");
    document.getElementById("essai").innerText = "Bien joué mfi";

  }




}
// event du click + fonction
document.getElementById("run").addEventListener("click", guessLetter);