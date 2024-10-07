let input = document.getElementById("input");

console.log("Prvek v inputu je: ", input);

function Add(element){
    input.value += element;
}

function sum(){
    vysledek = eval(input.value);
    input.value += "=" + vysledek; 
}

function del(){
    input.value = "";
}
