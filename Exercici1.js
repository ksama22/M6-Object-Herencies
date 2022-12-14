/*https://exercism.org/tracks/javascript/exercises/high-score-board */

// Inicia la scoreBoard 
let scoreBoard = {};

function createScoreBoard() {
    //Retorna un objecte per defecte
    return { The_Best_Ever: 1000000 };
}

function addPlayer(mscoreBoard, name, scorenum) {
    // Fa una inserccio de la key - valor; name - scorenum 
    mscoreBoard[name] = scorenum;
}

function removePlayer(mscoreBoard, name) {
    //A partir del valor nom l'esborra
    delete mscoreBoard[name];
}

function updateScore(mscoreBoard, name, scorenum) {
    //Mirem si existeix el valor
    if (typeof mscoreBoard[name] === "undefined") {
        // Si no existeix no fara update
        console.log("No existe el registro");
    } else {
        //Nomes insertara si existeix, sino faria un nou insert
        mscoreBoard[name] = scorenum;
    }
}

function applyMondayBonus(scoreBoard) {
    //Llista las keys
    let llistaKeysScore = Object.keys(scoreBoard);
    //Llista els valors de les keys
    let llistaValorsScore = Object.values(scoreBoard);
    for (let i = 0; i < llistaKeysScore.length; i++) {
        const element = llistaKeysScore[i];
        const value = llistaValorsScore[i];
        //Per cada valor en 'scoreBoard', li suma 100
        scoreBoard[element] = value + 100;
    }
}

scoreBoard = createScoreBoard();
console.log("Created Score with 1 register", scoreBoard);

addPlayer(scoreBoard, "Kevin", 555);
addPlayer(scoreBoard, "Jose", 1212);
addPlayer(scoreBoard, "Pedro", 777);
addPlayer(scoreBoard, "Luis", 555);
addPlayer(scoreBoard, "Kilian", 2222);

console.log("Added players", scoreBoard);

updateScore(scoreBoard, "Pedro", 12)
console.log("Update Player", scoreBoard);


applyMondayBonus(scoreBoard);
console.log("Applied Monday Bonus", scoreBoard);

function normalize(score) {
    return 2 * score + 10;
}

const params = { score: 400, normalizeFunction: normalize };