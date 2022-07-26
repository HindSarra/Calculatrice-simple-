// varibales globales
//elements memoire et ecran
const memoireElt= document.querySelector("#memoire");
const ecranElt =document.querySelector("#ecran");

// on stocke la valeur de l'écran "précédents"
let precedent=0;

// on stocke la valeur de "l'affichage"
let affichage = ""

// on stocke l'opération 
let operation=null;

// on inistialise la memoire
let memoire
window.onload=()=>{
  //on va écoutés les clics sur les touches
  let touches = document.querySelectorAll("span")
  for (let touche of touches){
    touche.addEventListener('click', gererTouches)
  }
}

//cette fonction réagit au clic des touches 
function gererTouches(){
let touche= this.innerText

// on verifie si cest un chiffre ou point 
if(parseFloat(touche)>= 0 || touche === "."){
  // on mets a jour le valeur d'affichage et on affiche sur l'écran
  affichage = (affichage === "") ? touche.toString() : affichage + touche.toString;
  ecranElt.innerText= affichage;
 }
 else{
  switch(touche){
    // touche C réinisialise tout
    case "C":
      affichage="";
      precedent=0;
      operation=null;
      ecranElt.innerText=0;
      break;
    //claculer
    case"+":
    case"-":
    case"*":
    case"/":
    //on calcule la valeur résultat de l'etat précédente
      precedent =(precedent===0)? parseFloat(affichage):claculer(precedent, parseFloat(affichage),operation)
      ecranElt.innerText=precedent;
      operation=touche;
      affichage="";
    break;
    case "=":
      precedent=(precedent===0)? parseFloat(affichage):
  }
 }
}
/** Effectue le calcule
 * 
 * @param {number} nb1 
 * @param {number} nb2 
 * @param {string} operation 
 * @retunrs number
 *  
 */

function claculer (nb1, nb2, operation){
nb1=parseFloat(nb1);
nb2=parseFloat(nb2);
if (operation ==="+") return nb1 + nb2;
if (operation ==="-") return nb1 - nb2;
if (operation ==="*") return nb1 * nb2;
if (operation ==="/") return nb1 / nb2;
}