
// Toutes les catégories qui vont apparaitre dans le HTML
const winMessage = document.getElementById("win");
const tryMessage = document.getElementById("try");
const wellMessage = document.getElementById("well");
const missMessage = document.getElementById("miss");
const notMessage = document.getElementById("not");

// Cache tous les messages au démarrage
winMessage.style.display = 'none';
tryMessage.style.display = 'none';
wellMessage.style.display = 'none';
missMessage.style.display = 'none';
notMessage.style.display = 'none';

//le mot à chercher
const base = 'dictionnaire';

// on cache le message gagnant
winMessage.style.display = 'none';


function tryMessageWord(word, base) {
    //TODO FIXED : vérification de la casse
    word = word.toLowerCase();
    base = base.toLowerCase();
    
    let wellPlaced = [];
    let missplaced = [];
    let notInWord = [];
    
    //Si la réponse est bonne => affichage du message gagnant
    if (word === base) {
        showWinMessage();
        return { win: true };
    }

    // On vérifie chaque lettre
    for (let i = 0; i < word.length; i++) {
        let letter = word[i]; // remplace le split
        
        // On vérifie si la lettre est à la bonne position
        if (letter === base[i]) {
            wellPlaced.push(letter);
        }
        // On vérifie si la lettre existe mais pas au bon endroit
        else if (base.includes(letter)) {
            missplaced.push(letter);
        }
        // On vérifie si la lettre est ou aps dans le mot
        else {
            notInWord.push(letter);
        }
    }

    //si le mot n'est pas celui cherché => affichage des rubriques dans if (!result.win)
    return {
        win: false,
        wellPlaced: wellPlaced,
        missplaced: missplaced,
        notInWord: notInWord
    };
}

//les affichages si le joueur gagne
function showWinMessage() {
    winMessage.style.display = 'block';
    winMessage.innerText = 'Vous avez gagné!';
    
    tryMessage.style.display = 'none';
    wellMessage.style.display = 'none';
    missMessage.style.display = 'none';
    notMessage.style.display = 'none';
}

//les affichages si le mot n'est que partiellement ou pas bon
function showGameStatus() {
    winMessage.style.display = 'none';
    
    tryMessage.style.display = 'block';
    wellMessage.style.display = 'block';
    missMessage.style.display = 'block';
    notMessage.style.display = 'block';
}

//lancement de la fonction de jeu principale
function guessAWord() {
    // Joue le son au clic
    const clickSound = document.getElementById("clickSound");
    clickSound.play();
    const wordInput = document.getElementById("word");
    const word = wordInput.value;

    
    if (!word) return;
    
    const result = tryMessageWord(word, base);
    
    //Si le mot n'est pas trouvé
    if (!result.win) {
        showGameStatus();
        //Affichages et remplissages des catégories quand le mot n'est pas ou que partiellement trouvé
        tryMessage.innerText = `Mot essayé: ${word}`; // ajout des placeholders à la place des +
        wellMessage.innerText = `Bien placé: ${result.wellPlaced.join(', ')}`;
        missMessage.innerText = `Mal placé: ${result.missplaced.join(', ')}`;
        notMessage.innerText = `Pas dans le mot: ${result.notInWord.join(', ')}`;
    }
    
    //le champs se vide automatiquement
    wordInput.value = '';
}
