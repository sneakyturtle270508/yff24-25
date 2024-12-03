function GenererNum() {
    return Math.floor(Math.random() * 10) + 1;
}

let RandomNum = GenererNum();
function sjekkTall(tallinput) {
    GiveUpButton.innerHTML = "";

    console.log(RandomNum);

    if (tallinput == RandomNum) {
        Checker.innerHTML = "";
        console.log("Riktig");
    } else if (tallinput != RandomNum) {
        console.log("Feil");

        if (isNaN(tallinput) || tallinput > 10 || tallinput < 0) {
            console.log("Du må skrive et tall mellom 1 og 10");
        } else if (tallinput > RandomNum) {
            console.log("Tallet er for høy");
        } else {
            console.log("Tallet er for lavt");
        }

        GiveUpButton.innerHTML = "<button onclick='GiveUp()'>Give up?</button>";
        Checker.innerHTML = "<button id='Checker'>Prøv igjen?</button>";
    }
}

