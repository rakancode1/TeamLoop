let x=prompt("enter a number one?") ;
    num1=Number(x)
    s=prompt("sction?") ;
    y=prompt("enter a number two?") ;
    num2=Number(y)


function chickTheName(){
    if(s === "+"){
        document.getElementById("up").innerHTML=num1+"+"+num2+"=";
         document.getElementById("middil").innerHTML=num1+num2;
    }
    else if (s === "*"){
        document.getElementById("up").innerHTML=num1+"x"+num2+"=";

        document.getElementById("middil").innerHTML=num1*num2;
    }
    else if (s == "-"){
        document.getElementById("up").innerHTML=num1+"-"+num2+"=";

        document.getElementById("middil").innerHTML=num1-num2;
    }
    else{
    document.getElementById("up")="eroor!";

    }
}
chickTheName();