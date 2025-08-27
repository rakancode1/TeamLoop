let x=document.getElementById("num1").value ;
    s=document.getElementById("s").value;
    y=document.getElementById("num2").value ;

function chickTheName(){
    if(s == "+"){
        console.log(x+y);
    }
    else if (s == "*"){
        console.log(x*y);
    }
    else{
        console.log(x-y);
    }

}
