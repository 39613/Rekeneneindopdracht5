const inputfield = document.getElementById("bedrag")
inputfield.addEventListener("change", myFunction);

function myFunction() {
    var Nbedrag =inputfield.value; 
    console.log(Nbedrag/100*121);
    document.getElementById("antwoord").innerHTML=Nbedrag/100*121

};