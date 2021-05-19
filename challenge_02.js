/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

*/

/* Getränke-Challenge */



function Go(){
    let name ,age,drink, output;
    drink = "Milch";
    name = document.getElementById("firstName").value;
    age = document.getElementById("age").value 
    
    if(document.getElementById("village").checked ){
        if(age >= 18){
            drink = "Underberg"
            }else if(age >= 13){
            drink = "Bier"
            }else if(age >= 6){
            drink = "Vitamalz";
            }

            output = name + " trink " + drink + "."
    }else{
        if(age >= 18){
            drink = "Wein"
            }else if(age >= 13){
            drink = "Cola"
            }else if(age >= 6){
            drink = "Saft";
            }
            output = name + " darf " + drink +" trinken"
    }
   
        document.getElementById("output").innerHTML = output;
        //console.log(drink);
}
