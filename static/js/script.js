window.onload = () => {
    // prepare canvas
    prepareCanvas();
    // register event listeners
}

prepareCanvas = () => {
    console.log("Preparing canvas...")
    var selectedNono = NONO1; // future support for multiple nono
    var currentGame = []; // in future - ways of storing sparse matrixes
    prepareCurrentGame();
}

prepareCurrentGame = () => {
    let cols = selectedNono[0].size();
    let rows = selectedNono[1].size();

}