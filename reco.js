let name = prompt("what is ur name?").toUpperCase();
    age = prompt("your age?")
if (name=="RAKAN"||name == "RECO"){
    alert("welcome "+name);
}
else if (name.length>=6){
    alert("long name "+name);
}
else{
    document.getElementById("cont").innerHTML="dont found "+name;

}