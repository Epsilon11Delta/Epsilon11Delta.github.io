input = document.querySelectorAll("input");
var url = 'http://www.mmi.uha.fr/exercices/grilleSudoku.php?numero=1';
REquest();
//Boutons
document.querySelector("button").addEventListener("click", ()=>{
    url = 'http://www.mmi.uha.fr/exercices/grilleSudoku.php?numero=1';
    REquest();
} );
document.querySelector("button:nth-child(2)").addEventListener("click", ()=>{
    url = 'http://www.mmi.uha.fr/exercices/grilleSudoku.php?numero=2';
    REquest();
});
document.querySelector("button:nth-child(3)").addEventListener("click", ()=>{
    url = 'http://www.mmi.uha.fr/exercices/grilleSudoku.php?numero=3';
    REquest();
});
//Fonction fetch
function REquest() {
fetch(url)        // Appel à un fichier.
    .then(function (response) {  // Prétraitement de la réponse.
        return response.json();
    })
    .then(function (show) {       // Utilisation de la réponse.
        for (let i = 0; i < input.length; i++) {
            input[i].value = show[i];
            if (show[i] == 0) {
                input[i].value = '';
            }
            else {
                input[i].disabled = true;
            }
        }

        }
    );
}
